

function calculateTriangleArea(){
    // console.log('Hello');
    //Get Triangle Base Value
    const triangleBaseInput = document.getElementById('base-input');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat( triangleBaseText);
    // console.log(base);
    //Get Triangle Height Value
    const triangleHeightInput = document.getElementById('height-input');
    const triangleHeightText = triangleHeightInput.value;
    const height = parseFloat( triangleHeightText);
    // console.log(height);
    //Calculate Triangle Area
    const area = .5 * base * height;
    console.log('Area of the Triangle is : ',area);
    //Display Triangle Area
    const displayArea = document.getElementById('triangle-display-area');
    displayArea.innerText = area;
    // console.log(area);

}