import dayjs from "dayjs";

export const DATE_FORMAT = "YYYY-MM-DD";
export const TIME_24_FORMAT = "HH:mm";
export const TIME_12_FORMAT = "h:mm A";
export const FULL_DATE_FORMAT = "DD [de] MMMM [del] YYYY";

type Format = typeof DATE_FORMAT | typeof TIME_24_FORMAT | typeof TIME_12_FORMAT | typeof FULL_DATE_FORMAT;

export const getFormattedDateString = (date: Date, format: Format) => dayjs(date).format(format);
export const convertToDate = (date: string | Date) => dayjs(date).toDate();
