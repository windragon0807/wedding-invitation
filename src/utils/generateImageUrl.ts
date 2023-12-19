type Props = {
  filename: string;
  format: 'jpg' | 'webp';
  option?: string;
};

export default function generateImageUrl({
  filename,
  format,
  option = 'q_auto,c_fill',
}: Props) {
  return `https://res.cloudinary.com/dpye7ajwr/image/upload/${option}/v1702968245/wedding-invitation/${format}/${filename}.${format}`;
}
