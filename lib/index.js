export default ({document} = this) => {
  const context = document.createElement('canvas').getContext('2d');

  let font;

  function measure(text) {
    if (font) {
      context.font = font;
    }

    return context.measureText(text).width;
  }

  measure.setFont = (newFont) => {
    font = newFont;
    return measure;
  };

  measure.useElementFont = (element) => {
    font = getComputedStyle(element).getPropertyValue('font');
    return measure;
  };

  return measure;
};




