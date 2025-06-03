import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {  Menu, Search } from 'lucide-react';
import {Link} from 'react-router-dom';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  const navItems = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '/about' },
    { name: 'Contact Us', href: '/contact-us' }
  ];

  const searchableItems = [
    { title: 'IT Services', href: '/it-services', category: 'Services' },
    { title: 'Custom Software Development', href: '/custom-software-development', category: 'Services' },
    { title: 'Web Development', href: '/web-development', category: 'Services' },
    { title: 'Cloud Services', href: '/cloud-services', category: 'Services' },
    { title: 'BPO', href: '/bpo', category: 'Services' },
    { title: 'Customer Support', href: '/customer-support', category: 'Services' },
    { title: 'Mobile App Development', href: '/mobile-app-development', category: 'Services' },
    { title: 'Finance & Accounting Services', href: '/finance-accounting-services', category: 'Services' },
    { title: 'Human Resource Outsourcing', href: '/human-resource-outsourcing', category: 'Services' },
    { title: 'Data Entry & Management', href: '/data-entry-management', category: 'Services' },
    { title: 'Digital Creative Services', href: '/digital-creative-services', category: 'Services' },
    { title: 'Graphic Design & Animation', href: '/graphic-design-animation', category: 'Services' },
    { title: 'Digital Marketing Services', href: '/digital-marketing-services', category: 'Services' },
    { title: 'Technical & Professional Services', href: '/technical-professional-services', category: 'Services' },
    { title: 'IT Helpdesk & Infrastructure Support', href: '/it-helpdesk-infrastructure-support', category: 'Services' },
    { title: 'CAD & Engineering Design Services', href: '/cad-engineering-design-services', category: 'Services' },
    { title: 'Legal Process Outsourcing', href: '/legal-process-outsourcing', category: 'Services' },
    { title: 'Market Research & Business Analytics', href: '/market-research-business-analytics', category: 'Services' },
    { title: 'Our HR and Staffing Services', href: '/hr', category: 'Services' },
   
  ];

  const filteredItems = searchableItems.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );

  const handleSearchSelect = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = href;
    }
    setIsSearchOpen(false);
    setSearchValue('');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-brand-dark/95 backdrop-blur-sm border-b border-gray-700">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Q</span>
            </div>
            <span className="text-xl font-bold text-white">Quaff Global Services</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-text-light hover:text-accent transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Search Bar */}
            <Popover open={isSearchOpen} onOpenChange={setIsSearchOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-64 justify-start text-gray-400 border-gray-600 bg-gray-800/50 hover:bg-gray-700/50"
                  onClick={() => setIsSearchOpen(true)}
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

            {/* CTA Button */}            
<Link to="/contact-us">
  <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover-glow">
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
            {/* Mobile Search */}
            <div className="mt-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search services..."
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                  className="pl-10 bg-gray-800/50 border-gray-600 text-white placeholder-gray-400"
                />
              </div>
              {searchValue && (
                <div className="mt-2 bg-gray-800 border border-gray-600 rounded-md max-h-48 overflow-y-auto">
                  {filteredItems.length > 0 ? (
                    filteredItems.map((item) => (
                      <button
                        key={item.href}
                        onClick={() => handleSearchSelect(item.href)}
                        className="w-full text-left px-3 py-2 text-gray-200 hover:bg-gray-700 transition-colors"
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

            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-text-light hover:text-accent transition-colors duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-primary hover:bg-primary/90 text-white w-full mt-4">
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
