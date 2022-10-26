export const useGoBack = () => {
  console.log(document.referrer);
  window.location.href = document.referrer;
};
