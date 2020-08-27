// export default (features, { text, sortBy }) => {
//     return features.filter((feature) => {
//         const textMatch = feature.name.toLowerCase().includes(text.toLowerCase());
//         return textMatch;
//     }).sort((a, b) => {
//         if (sortBy === 'amount') {
//             return a.amount < b.amount ? 1 : -1;
//         }
//     });
// };