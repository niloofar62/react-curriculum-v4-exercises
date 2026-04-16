export default function SnackList() {
  const snacks = [
    { name: 'Potato Chips', rank: 5 },
    { name: 'Chocolate', rank: 3 },
    { name: 'Ice Cream', rank: 2 },
    { name: 'Popcorn', rank: 4 },
    { name: 'Pistachios', rank: 1 },
  ];

  const sortedSnacks = snacks.toSorted((a, b) => a.rank - b.rank);

  return (
    <ol>
      {sortedSnacks.map((snack) => (
        <li key={snack.name}>
          #{snack.rank} - {snack.name}
        </li>
      ))}
    </ol>
  );
}
