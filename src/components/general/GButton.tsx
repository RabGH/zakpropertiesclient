import React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import { SxProps } from '@mui/system';
import { Theme } from '@mui/material/styles';

interface GeneralButtonProps {
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  size?: 'small' | 'medium' | 'large';
  variant?: 'text' | 'outlined' | 'contained';
  sx?: SxProps<Theme> | undefined;
  required?: boolean;
  className?: string;
}

const GeneralButton = (props: GeneralButtonProps) => {
  const muiTheme = useTheme();

  const { label, onClick, children, size, variant, className, sx } = props;
  

  return (
    <Button 
      variant={variant} 
      size={size} 
      onClick={onClick} 
      sx={sx}
      className={className}
    >
      {children || label}
    </Button>
  );
}

export default GeneralButton;
