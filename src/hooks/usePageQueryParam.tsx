const usePageQueryParam = (url: string): number => {
  const page = url
    .split('?')[1]
    .split('&')
    .find(i => i.includes('page'))
    ?.split('=')[1];
  return page ? parseInt(page) : 0;
};

export default usePageQueryParam;
