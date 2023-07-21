import { ImageList, ImageListItem } from "@mui/material";


export const  ImageGallery = ({images =[]}) => {
  return (
    <ImageList sx={{ width: '100%', height:500 }} cols={3} rowHeight={200}>
      {images.map((image) => (
        <ImageListItem key={image}>
          <img
            src={`${image}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${image}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt='Journal Photo'
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

