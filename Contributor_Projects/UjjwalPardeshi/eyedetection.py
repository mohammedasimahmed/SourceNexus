import cv2

cascade_classifier = cv2.CascadeClassifier('haarcascades/haarcascade_eye.xml')
cap = cv2.VideoCapture(0)

while True:
    # Capture frame-by-frame
    ret, funnyMl = cap.read()
    # Our operations on the frame come here
    gray = cv2.cvtColor(funnyMl, 0)
    detections = cascade_classifier.detectMultiScale(gray,scaleFactor=1.3,minNeighbors=5)
    if(len(detections) > 0):
        (x,y,w,h) = detections[0]
        funnyMl = cv2.rectangle(funnyMl,(x,y),(x+w,y+h),(100,0,0),2)

    # for (x,y,w,h) in detections:
    # 	frame = cv2.rectangle(frame,(x,y),(x+w,y+h),(255,0,0),2)

    # Displaying the resulting frame
    cv2.imshow('funnyMl',funnyMl)
    if cv2.waitKey(22) & 0xFF == ord('q'):
        break

# release the capture
cap.release()
cv2.destroyAllWindows()