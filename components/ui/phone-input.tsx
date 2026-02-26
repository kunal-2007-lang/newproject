'use client';

import * as React from 'react';
import { Check, ChevronsUpDown, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Badge } from '@/components/ui/badge';

const countries = [
  { value: '+91', label: 'India (+91)' },
  { value: '+1', label: 'United States (+1)' },
  { value: '+44', label: 'United Kingdom (+44)' },
  { value: '+61', label: 'Australia (+61)' },
  { value: '+81', label: 'Japan (+81)' },
  { value: '+49', label: 'Germany (+49)' },
  { value: '+33', label: 'France (+33)' },
  { value: '+86', label: 'China (+86)' },
];

interface PhoneInputProps {
  value?: string[];
  onChange: (value: string[]) => void;
  className?: string;
}

export function PhoneInput({
  value = [],
  onChange,
  className,
}: PhoneInputProps) {
  const [open, setOpen] = React.useState(false);
  const [countryCode, setCountryCode] = React.useState('+91');
  const [inputValue, setInputValue] = React.useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      addPhoneNumber();
    }
  };

  const addPhoneNumber = () => {
    if (!inputValue.trim()) return;

    let number = inputValue.trim();
    // Basic cleanup
    number = number.replace(/[^\d]/g, '');

    // Append country code if not present (heuristic)
    // If number starts with country code (without +), we assume they typed it manually
    // But to be safe, we prepend Selected Country Code to the raw number
    const fullNumber = `${countryCode}${number}`;

    if (!value.includes(fullNumber)) {
      onChange([...value, fullNumber]);
    }
    setInputValue('');
  };

  const removePhoneNumber = (numberToRemove: string) => {
    onChange(value.filter((number) => number !== numberToRemove));
  };

  return (
    <div className={cn('flex flex-col gap-2', className)}>
      <div className="flex gap-2">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[140px] justify-between"
            >
              {countryCode}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search country..." />
              <CommandList>
                <CommandEmpty>No country found.</CommandEmpty>
                <CommandGroup>
                  {countries.map((country) => (
                    <CommandItem
                      key={country.value}
                      value={country.label}
                      onSelect={(currentValue) => {
                        const selected = countries.find(
                          (c) =>
                            c.label.toLowerCase() ===
                            currentValue.toLowerCase(),
                        );
                        if (selected) {
                          setCountryCode(selected.value);
                        }
                        setOpen(false);
                      }}
                    >
                      <Check
                        className={cn(
                          'mr-2 h-4 w-4',
                          countryCode === country.value
                            ? 'opacity-100'
                            : 'opacity-0',
                        )}
                      />
                      {country.label}
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
        <div className="relative flex-1">
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            placeholder="Enter phone number..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={addPhoneNumber}
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {value.map((number) => (
          <Badge key={number} variant="secondary" className="gap-1 pr-1">
            {number}
            <button
              type="button"
              onClick={() => removePhoneNumber(number)}
              className="ml-1 rounded-full outline-none ring-offset-background focus:ring-2 focus:ring-ring focus:ring-offset-2"
            >
              <X className="h-3 w-3 text-muted-foreground hover:text-foreground" />
            </button>
          </Badge>
        ))}
      </div>
      <p className="text-xs text-muted-foreground">
        Type a number and press Enter or Comma to add. Default country code:{' '}
        {countryCode}
      </p>
    </div>
  );
}
