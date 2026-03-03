export const getHourlyData = (list: any[]) => {
  const next24 = list.slice(0, 8);

  const labels = next24.map(
    (item) => new Date(item.dt_txt).getHours() + "h"
  );

  const temps = next24.map(
    (item) => item?.main?.temp ?? 0
  );

  const rain = next24.map(
    (item) => Number(((item?.pop ?? 0) * 100).toFixed(0))
  );

  const humidity =
    next24.length > 0
      ? next24.reduce(
          (sum, item) => sum + (item?.main?.humidity ?? 0),
          0
        ) / next24.length
      : 0;

  return { labels, temps, rain, humidity };
};