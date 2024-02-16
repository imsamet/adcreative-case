export const handleEnterKey = (e: React.KeyboardEvent<HTMLDivElement>, callBack: Function) => {
  e.key === 'Enter' && callBack();
};
