import { FC } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { Box } from "@mui/material";

export interface ImageCardProps {
  title: string;
  image?: string;
  onClick?: () => void;
}

const ImageCard: FC<ImageCardProps> = ({ title, image, onClick }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        width: "100%",
        ":hover": { transform: "scale(1.05)" },
        transition: "all .4s ease",
      }}
      elevation={5}
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Image
          src={image || "/images/poke_ball.png"}
          alt="pokemon ball"
          width={100}
          height={100}
        />
      </Box>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => onClick?.()}>
          Open poke ball
        </Button>
      </CardActions>
    </Card>
  );
};

export default ImageCard;
