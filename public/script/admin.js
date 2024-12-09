// 관리자 로그
const adminLogoutBtn = document.querySelector("#admin_logout");
adminLogoutBtn.addEventListener("click", () => {
    location.href = "/logout";
})