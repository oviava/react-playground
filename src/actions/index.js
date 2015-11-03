export const types = {
  PREV_SLIDE: 'PREV_SLIDE',
  NEXT_SLIDE: 'NEXT_SLIDE',
};

export function nextSlide() {
  return {type: types.NEXT_SLIDE};
}

export function prevSlide() {
  return {type: types.PREV_SLIDE};
}
