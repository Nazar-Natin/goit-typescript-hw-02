type AllType = {
  name: string;
  position: number;
  color: string;
  weight: number;
};

function compare<T extends AllType, U extends AllType>(
  top: Pick<T, keyof AllType>,
  bottom: Pick<U, keyof AllType>
): AllType {
  return {
    name: top.name,
    color: top.color,
    position: bottom.position,
    weight: bottom.weight,
  };
}

const topObject: Pick<AllType, "name" | "color"> = {
  name: "Top",
  color: "Red",
};
const bottomObject: Pick<AllType, "position" | "weight"> = {
  position: 1,
  weight: 10,
};

const result: AllType = compare(topObject, bottomObject);
console.log(result);
