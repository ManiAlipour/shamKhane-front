import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import { IconType } from "react-icons";

interface InformationCartProps {
  title: string;
  description: string;
  icon: IconType;
}

function InformationCart({
  title,
  description,
  icon: Icon,
}: InformationCartProps) {
  return (
    <Card
      style={{
        padding: "2rem",
        borderRadius: "1rem",
        backgroundColor: "#6699cc",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        gridColumn: "span 1",
      }}
    >
      <CardActionArea>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            gap: "1rem",
          }}
        >
          <Icon size={40} />
          <Typography variant="h5" component="div" align="center">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" align="center">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default InformationCart;
