import { Property, Project } from "@lib/types";
import { Box, useTheme, Button } from "@mui/material";
import Link from "next/link";
import React from 'react'

interface mainButtonBar {
    properties: Property[];
    projects: Project[];
};

const mainButtonBar = () => {
  return (
    <div>mainButtonBar</div>
  )
}

export default mainButtonBar