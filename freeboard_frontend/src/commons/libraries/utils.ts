export const getDate = (date) => {
  if (!date || typeof date !== 'string') return '';

  const value = new Date(date);
  const yyyy = value.getFullYear();
  const mm = String(value.getMonth() + 1).padStart(2, '0');
  const dd = String(value.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
};

export const validateImage = (image) => {
  const receivedFiles = [];
  Object.values(image).map((data) => {
    receivedFiles.push(data);
  });

  if (receivedFiles === []) {
    alert('이미지가 없습니다.');
    return false;
  }
  if (receivedFiles.length > 3) {
    alert('파일은 3개까지 업로드할 수 있습니다.');
    return false;
  }
  receivedFiles.every((currentValue) => {
    if (!currentValue.type.includes('png', 'jpg')) {
      alert('업로드된 파일의 확장자가 png 또는 jpg가 아닙니다.');
      return false;
    }
  });

  receivedFiles.every((currentValue) => {
    if (currentValue.size > 5 * 1024 * 1024) {
      alert('업로드된 파일이 너무 큽니다. (5MB 제한)');
      return false;
    }
  });

  return true;
};
