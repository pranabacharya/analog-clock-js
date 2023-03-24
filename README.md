# Analog Clock using Vanilla JS

-> used pure JavaScript, used CSS positioning property to style clock hands

## Authors

- [@pranabacharya](https://www.linkedin.com/in/pranab-acharya/)

## Logic for Clock Hand Rotation

    ~~~
        let d = new Date();
        let h = d.getHours();
        let m = d.getMinutes();
        let s = d.getSeconds()
    ~~~
    1.  for hourRotation = 30 * h + 0.5 m + 0.0083s
    2.  for minuteRotation = 6 * m + 0.1s
    3.  for secondRotation = 6 * s;
