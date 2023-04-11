function checkInput(numOrStr) {
    switch (true) {
      case (numOrStr === null):
        return 'ви скасували';
      case (numOrStr.trim() === ''):
        return 'Empty String';
      case (isNaN(+numOrStr)):
        return 'number is Ba_NaN';
      default:
        return 'OK!';
    }
  }