function calculatePentagonArea(){
    const perimeter = getInputValueById('pentagon-perimeter-input');
    const  apothem = getInputValueById('pentagon-apothem-input');
    area = 0.5 * perimeter * apothem ;
    setInnerTextById('pentagon-display-area',area);
}