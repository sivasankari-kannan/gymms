import React, { useState, useEffect } from 'react';
import { Search, UserCheck, UserX } from 'lucide-react';
import Input from '../ui/Input';
import Button from '../ui/Button';
import { members } from '../../data/mockData';
import { Member } from '../../types';

const CheckInOutForm: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Member[]>([]);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [mode, setMode] = useState<'check-in' | 'check-out'>('check-in');

  useEffect(() => {
    if (searchTerm.length >= 2) {
      const filtered = members.filter(
        (member) =>
          member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
          member.phone.includes(searchTerm)
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleSelectMember = (member: Member) => {
    setSelectedMember(member);
    setSearchTerm('');
    setSearchResults([]);
  };

  const handleCheckInOut = () => {
    if (!selectedMember) return;
    
    // Here you would normally make an API call to check the member in/out
    alert(`${selectedMember.name} has been ${mode === 'check-in' ? 'checked in' : 'checked out'} successfully!`);
    
    // Reset form
    setSelectedMember(null);
    setSearchTerm('');
  };

  return (
    <div className="space-y-6 animate-enter">
      <div className="flex space-x-4">
        <Button
          variant={mode === 'check-in' ? 'primary' : 'outline'}
          onClick={() => setMode('check-in')}
          leftIcon={<UserCheck size={18} />}
          className="flex-1"
        >
          Check In
        </Button>
        <Button
          variant={mode === 'check-out' ? 'primary' : 'outline'}
          onClick={() => setMode('check-out')}
          leftIcon={<UserX size={18} />}
          className="flex-1"
        >
          Check Out
        </Button>
      </div>

      <div className="relative">
        <Input
          label={`Search member to ${mode === 'check-in' ? 'check in' : 'check out'}`}
          placeholder="Name, email or phone number"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          leftIcon={<Search size={18} />}
        />
        
        {searchResults.length > 0 && (
          <div className="absolute z-10 mt-1 w-full rounded-md bg-white shadow-lg max-h-60 overflow-auto ring-1 ring-black ring-opacity-5">
            <ul className="py-1\" role="listbox">
              {searchResults.map((member) => (
                <li
                  key={member.id}
                  onClick={() => handleSelectMember(member)}
                  className="cursor-pointer px-4 py-2 hover:bg-gray-100 transition"
                >
                  <div className="flex items-center">
                    <img
                      src={member.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0EA5E9&color=fff`}
                      alt={member.name}
                      className="h-8 w-8 rounded-full mr-3"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-500">{member.email}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {selectedMember && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 animate-scale-in">
          <div className="flex items-center">
            <img
              src={selectedMember.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(selectedMember.name)}&background=0EA5E9&color=fff`}
              alt={selectedMember.name}
              className="h-12 w-12 rounded-full mr-4"
            />
            <div>
              <h3 className="text-lg font-medium text-gray-900">{selectedMember.name}</h3>
              <p className="text-sm text-gray-600">
                {selectedMember.email} • {selectedMember.phone}
              </p>
            </div>
          </div>
          
          <div className="mt-4">
            <Button
              onClick={handleCheckInOut}
              variant="primary"
              className="w-full"
              leftIcon={mode === 'check-in' ? <UserCheck size={18} /> : <UserX size={18} />}
            >
              {mode === 'check-in' ? 'Confirm Check In' : 'Confirm Check Out'}
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckInOutForm;