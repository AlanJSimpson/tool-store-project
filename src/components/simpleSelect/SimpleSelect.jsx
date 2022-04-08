import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export default function SimpleSelect({
  label,
  value,
  options,
  onSelectChange,
}) {
  const handleChange = (e) => {
    onSelectChange(e.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>{label}</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={value}
          label={label}
          onChange={(e) => handleChange(e)}
        >
          {options.map((option, index) => {
            return (
              <MenuItem key={index} value={option.value}>
                {option.title}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
