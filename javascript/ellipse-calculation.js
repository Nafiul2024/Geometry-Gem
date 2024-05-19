function calculateEllipseArea(){
    // console.log('Hello');
    //Get Triangle Base Value
    const ellipseSemiMajorAxisInput = document.getElementById('semi-major-axis-input');
    const ellipseSemiMajorAxisInputText = ellipseSemiMajorAxisInput.value;
    const semiMajorAxis = parseFloat(ellipseSemiMajorAxisInputText);
    // console.log(base);
    //Get Triangle Height Value
    const ellipseSemiMinorAxisInputTextInput = document.getElementById('semi-minor-axis-input');
    const ellipseSemiMinorAxisInputTextInputText = ellipseSemiMinorAxisInputTextInput.value;
    const semiMinorAxis = parseFloat(ellipseSemiMinorAxisInputTextInputText);
    // console.log(height);
    //Calculate Triangle Area
    const area = Math.PI * semiMajorAxis * semiMinorAxis;
    console.log('Area of the Triangle is : ',area);
    //Display Triangle Area
    const displayArea = document.getElementById('ellipse-display-area');
    displayArea.innerText = area;
    // console.log(area);
}