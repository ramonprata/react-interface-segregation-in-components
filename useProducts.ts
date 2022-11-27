export const useProducts = (): Iproduct[] => {
  return [
    {
      id: 0,
      description: 'Some description product 1',
      subDescription: 'Some sub-description product 1',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      stars: 4,
    },
    {
      id: 1,
      description: 'Some description product 2',
      subDescription: 'Some sub-description product 2',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      stars: 5,
    },
    {
      id: 2,
      description: 'Some description product 3',
      subDescription: 'Some sub-description product 3',
      imagePath:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/681px-Placeholder_view_vector.svg.png',
      stars: 3,
    },
  ];
};

export interface Iproduct {
  id: number;
  description: string;
  subDescription?: string;
  imagePath: string;
  stars: number;
}
