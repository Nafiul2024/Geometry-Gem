function calculateRhombusArea(){
    const diagonal1 = getInputValueById('diagonal1-input');
    const diagonal2 = getInputValueById('diagonal2-input');
    area = 0.5 * diagonal1 * diagonal2 ;
    setInnerTextById('rhombus-display-area',area);
}