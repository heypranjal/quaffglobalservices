import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Menu, Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const navItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  const serviceItems = [
    { name: 'IT & Software Development', href: '/it-services' },
    { name: 'Business Process Outsourcing (BPO)', href: '/bpo' },
    { name: 'Digital & Creative Services', href: '/digital-creative-services' },
    { name: 'Technical & Professional Services', href: '/technical-professional-services' },
    { name: 'HR & Staffing Services', href: '/hr' },
  ];

  const searchableItems = [
    { title: 'IT Services', href: '/it-services', category: 'Services' },
    { title: 'Web Development', href: '/web-development', category: 'Services' },
    { title: 'Mobile App Development', href: '/mobile-app-development', category: 'Services' },
    { title: 'Digital Marketing Services', href: '/digital-marketing-services', category: 'Services' },
    { title: 'Customer Support', href: '/customer-support', category: 'Services' },
    { title: 'BPO', href: '/bpo', category: 'Services' },
    { title: 'CAD & Engineering Design Services', href: '/cad-engineering-design-services', category: 'Services' },
    { title: 'Finance & Accounting Services', href: '/finance-accounting-services', category: 'Services' },
    { title: 'Legal Process Outsourcing', href: '/legal-process-outsourcing', category: 'Services' },
    { title: 'Cloud Services', href: '/cloud-services', category: 'Services' },
    { title: 'HR & Staffing Services', href: '/hr', category: 'Services' },
  ];

  const filteredItems = searchableItems.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchSelect = (href: string) => {
    window.location.href = href;
    setIsSearchOpen(false);
    setSearchValue('');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80">
            <img
              src="/src/assets/logoquaff.png"
              alt="Quaff Global Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <span className="text-xl font-bold text-white">Quaff Global Services</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center text-white hover:text-accent font-medium group">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4 group-data-[state=open]:rotate-180 transition-transform" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 bg-gray-800 border-gray-600">
                {serviceItems.map((item) => (
                  <DropdownMenuItem key={item.name} asChild>
                    <Link
                      to={item.href}
                      className="block px-3 py-2 text-sm text-white hover:bg-gray-700"
                    >
                      {item.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-white hover:text-accent font-medium"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Search + CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-64 justify-start text-gray-400 border-gray-600 bg-gray-800/50 hover:bg-gray-700/50"
                >
                  <Search className="mr-2 h-4 w-4" />
                  Search services...
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64 p-0 bg-gray-800 border-gray-600" align="end">
                <Command className="bg-gray-800">
                  <CommandInput
                    placeholder="Search services..."
                    value={searchValue}
                    onValueChange={setSearchValue}
                    className="text-white"
                  />
                  <CommandList className="max-h-64">
                    <CommandEmpty className="text-gray-400">No results found.</CommandEmpty>
                    {Object.entries(
                      filteredItems.reduce((acc, item) => {
                        if (!acc[item.category]) acc[item.category] = [];
                        acc[item.category].push(item);
                        return acc;
                      }, {} as Record<string, typeof filteredItems>)
                    ).map(([category, items]) => (
                      <CommandGroup key={category} heading={category} className="text-gray-300">
                        {items.map((item) => (
                          <CommandItem
                            key={item.href}
                            onSelect={() => handleSearchSelect(item.href)}
                            className="text-gray-200 hover:bg-gray-700 cursor-pointer"
                          >
                            {item.title}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    ))}
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>

            <Link to="/contact-us">
              <Button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            {/* Logo on mobile */}
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/src/assets/logoquaff.png"
                alt="Quaff Global"
                className="w-10 h-10 rounded-full"
              />
              <span className="text-white font-semibold text-lg">Quaff Global Services</span>
            </div>

            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="pl-10 bg-gray-800 text-white border-gray-600"
                />
              </div>
              {searchValue && (
                <div className="mt-2 bg-gray-800 border border-gray-600 rounded-md max-h-48 overflow-y-auto">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleSearchSelect(item.href)}
                        className="w-full text-left px-3 py-2 text-gray-200 hover:bg-gray-700"
                      >
                        <div className="text-sm font-medium">{item.title}</div>
                        <div className="text-xs text-gray-400">{item.category}</div>
                      </button>
                    ))
                  ) : (
                    <div className="px-3 py-2 text-gray-400 text-sm">No results found</div>
                  )}
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center justify-between w-full text-white font-medium"
              >
                Services
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isServicesOpen && (
                <div className="mt-2 ml-4 space-y-2">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block text-gray-300 hover:text-accent text-sm"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Other Links */}
            <div className="mt-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-white font-medium hover:text-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button className="w-full mt-4 bg-primary text-white">Get Started</Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
