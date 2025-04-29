import { Collection } from '@/types/collection';
import { formatCurrency, formatPercent, formatShortNumber } from '@/utils/formatters';

const formatCollection = (data: Collection) => {
    return {
      name: data.name,
      id: data.id,
      image: data.image,
      floorPrice: formatCurrency(data.floorPrice),
      topBid: formatCurrency(data.topBid),
      "1DChange": formatPercent(data["1DChange"]),
      "7DChange": formatPercent(data["7DChange"]),
      "1DVolume": formatCurrency(data["1DVolume"]),
      "7DVolume": formatCurrency(data["7DVolume"]),
      totalVolume: formatCurrency(data.totalVolume),
      owners: formatShortNumber(data.owners),
      supply: formatShortNumber(data.supply),
    };
  };

export default formatCollection
