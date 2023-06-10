function range(start = 0, end, step) {
    if (end === undefined) {
  end = start;
        start = 0;
}

step = step === undefined ? (start < end ? 1 : -1) : step;
return baseRange(start, end, step);
}