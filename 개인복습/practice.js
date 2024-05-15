input.addEventListener('invalid', function (event) {
    event.preventDefault();  // 기본 유효성 검사 UI 제거
    alert('유효하지 않은 값입니다.');  // 사용자 정의 UI 표시
});