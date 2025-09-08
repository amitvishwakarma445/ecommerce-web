export const parseIndianCurrencyToNumber = (formattedPrice) => {
    // Remove ₹ symbol, commas, and trim whitespace
    const cleaned = formattedPrice.replace(/[^0-9.]/g, "").trim();
    return parseFloat(cleaned);
};