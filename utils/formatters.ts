const formatCurrency = (value: number | null | undefined, max: number = 2): string | null => {
    if (value === 0 || value === null || value === undefined) return null;
    return new Intl.NumberFormat('en-US', {
      style: 'decimal',
      minimumFractionDigits: 2,
      maximumFractionDigits: max,
    }).format(value);
  };
  
  const formatPercent = (value: number | null | undefined, max: number = 2): string | null => {
    if (value === 0 || value === null || value === undefined) return null;
    return `${value.toFixed(max)}%`;
  };
  
  const formatShortNumber = (value: number | null | undefined): string | null => {
    if (value === 0 || value === null || value === undefined) return null;
    const abs = Math.abs(value);
    if (abs >= 1_000_000_000) return `${(value / 1_000_000_000).toFixed(1)}B`;
    if (abs >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M`;
    if (abs >= 1_000) return `${(value / 1_000).toFixed(1)}K`;
    return value.toString();
  };
  

export { formatCurrency, formatPercent, formatShortNumber };