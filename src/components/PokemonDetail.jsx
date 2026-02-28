"use client";

import React, { useState, useEffect } from "react";
import { Box, Typography, Button, Paper, Grid, Dialog, DialogTitle, DialogContent, DialogActions,} from "@mui/material";
import Image from "next/image";
import TypeBadge from "./TypeBadge";
import { useLanguage } from "@/context/LanguageContext";

const PokemonDetail = ({ pokemon, typeColors }) => {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false); 
  const { language } = useLanguage();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const name =
    pokemon.names?.[language] ||
    pokemon.names?.["en"] ||
    "Nom inconnu";

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Paper
      elevation={3}
      sx={{
        p: 6,
        borderRadius: 2,
        color: "white",
        bgcolor: "rgba(32, 68, 139, 0.85)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.1)",
        textAlign: "center",
        maxWidth: 700,
        margin: "auto",
      }}
    >
      <Typography
        variant="h3"
        sx={{ fontWeight: "bold", textTransform: "capitalize", mb: 1 }}
      >
        {name}
      </Typography>

      <Typography variant="h6" sx={{ opacity: 0.8, mb: 2 }}>
        No. {String(pokemon.id).padStart(3, "0")}
      </Typography>

      <Box
        sx={{
          mb: 3,
          display: "flex",
          justifyContent: "center",
          gap: 1,
        }}
      >
        {pokemon.types.map((type) => (
          <TypeBadge key={type} type={type} typeColors={typeColors} />
        ))}
      </Box>

      <Box
        sx={{
          position: "relative",
          width: 250,
          height: 250,
          margin: "auto",
          mb: 3,
        }}
      >
        <Image
          src={pokemon.image}
          alt={name}
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </Box>

      <Grid container spacing={2} sx={{ mb: 4 ,margin: "auto" }}>
        <Grid item xs={6}>
          <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
            Height
          </Typography>
          <Typography variant="h6" sx={{mb:1}}>
            {pokemon.height / 10} m
          </Typography>
        </Grid>

        <Grid item xs={6}>
          <Typography variant="subtitle2" sx={{ opacity: 0.7 }}>
            Weight
          </Typography>
          <Typography variant="h6">
            {pokemon.weight / 10} kg
          </Typography>
        </Grid>
      </Grid>

      <Button
        fullWidth
        variant="contained"
        onClick={handleOpen}
        sx={{
          borderRadius: 4,
          py: 1.5,
          fontWeight: "bold",
        }}
      >
        Moves
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs" >
        <DialogTitle sx={{ fontWeight: "bold" }}>
           {name} moves
        </DialogTitle>

        <DialogContent dividers>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
            }}
          >
            {pokemon.moves.map((move, index) => (
              <Typography key={index} variant="body2">
                • {move}
              </Typography>
            ))}
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default PokemonDetail;