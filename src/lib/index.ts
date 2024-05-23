interface IStates {
  assetsQuantity: number;
  medianPrice: number;
  buyValue: number;
  medianPriceTarget: number;
}

export const calculateAssetsNeed = ({
  assetsQuantity,
  medianPrice,
  buyValue,
  medianPriceTarget,
}: IStates) => {
  return (
    (assetsQuantity * (medianPrice - medianPriceTarget)) /
    (medianPriceTarget - buyValue)
  );
};
