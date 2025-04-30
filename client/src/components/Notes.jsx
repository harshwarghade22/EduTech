import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const Notes = () => {
  // Create default notes with specified topics
  const createDefaultNotes = () => {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString([], { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
    
    return [
      {
        id: Date.now() - 3000,
        text: "Math Revision:\n- Complete calculus exercises (pg 45-48)\n- Review integration formulas\n- Solve practice problems from last week\n- Prepare for Friday's quiz",
        x: 100,
        y: 100,
        width: 240,
        height: 200,
        color: '#FFF9C4', // Light Yellow
        created: `${dateString} at ${timeString}`,
        timestamp: now
      },
      {
        id: Date.now() - 2000,
        text: "Science Practical:\n- Prepare lab equipment\n- Review experiment procedure\n- Complete pre-lab questions\n- Remember to bring safety goggles!",
        x: 400,
        y: 150,
        width: 240,
        height: 200,
        color: '#C8E6C9', // Light Green
        created: `${dateString} at ${timeString}`,
        timestamp: now
      },
      {
        id: Date.now() - 1000,
        text: "Chemistry Molecule Visualization:\n- Draw Lewis structures for organic compounds\n- Create 3D models of molecules\n- Compare bond angles and lengths\n- Analyze electron distributions",
        x: 250,
        y: 400,
        width: 240,
        height: 200,
        color: '#BBDEFB', // Light Blue
        created: `${dateString} at ${timeString}`,
        timestamp: now
      },
      {
        id: Date.now(),
        text: "Lab Results Analysis:\n- Graph experimental data\n- Calculate error margins\n- Compare to theoretical values\n- Prepare conclusion for report",
        x: 550,
        y: 350,
        width: 240,
        height: 200,
        color: '#E1BEE7', // Light Purple
        created: `${dateString} at ${timeString}`,
        timestamp: now
      }
    ];
  };

  const [notes, setNotes] = useState(createDefaultNotes);
  const [boardPosition, setBoardPosition] = useState({ x: 0, y: 0 });
  const [isDraggingBoard, setIsDraggingBoard] = useState(false);
  const [dragStartPoint, setDragStartPoint] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [isAddingNote, setIsAddingNote] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  
  const boardRef = useRef(null);
  const editRef = useRef(null);
  
  // Add a new note at the clicked position
  const addNote = (e) => {
    if (isDraggingBoard) return;
    
    // Convert screen coordinates to board coordinates
    const boardRect = boardRef.current.getBoundingClientRect();
    const x = (e.clientX - boardRect.left - boardPosition.x) / scale;
    const y = (e.clientY - boardRect.top - boardPosition.y) / scale;
    
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const dateString = now.toLocaleDateString([], { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });

    const newNote = {
      id: Date.now(),
      text: '',
      x,
      y,
      width: 240,
      height: 200,
      color: getRandomColor(),
      created: `${dateString} at ${timeString}`,
      timestamp: now
    };
    
    setNotes([...notes, newNote]);
    setSelectedNote(newNote.id);
    setIsEditingNote(true);
    setIsAddingNote(true);
    
    // Animation effect for new note
    setTimeout(() => setIsAddingNote(false), 500);
  };
  
  // Get random sticky note color with better contrast
  const getRandomColor = () => {
    const colors = [
      '#FFF9C4', // Light Yellow
      '#C8E6C9', // Light Green
      '#FFCCBC', // Light Peach
      '#BBDEFB', // Light Blue
      '#E1BEE7', // Light Purple
      '#F8BBD0', // Light Pink
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };
  
  // Start dragging the board
  const startDraggingBoard = (e) => {
    if (e.target === boardRef.current || e.target.tagName === 'rect') {
      e.preventDefault();
      setIsDraggingBoard(true);
      setDragStartPoint({
        x: e.clientX - boardPosition.x,
        y: e.clientY - boardPosition.y
      });
    }
  };
  
  // Handle mouse move for dragging the board
  const moveBoard = (e) => {
    if (isDraggingBoard) {
      setBoardPosition({
        x: e.clientX - dragStartPoint.x,
        y: e.clientY - dragStartPoint.y
      });
    }
  };
  
  // End dragging the board
  const endDraggingBoard = () => {
    setIsDraggingBoard(false);
  };
  
  // Start dragging a note
  const startDraggingNote = (e, noteId) => {
    e.stopPropagation();
    
    const note = notes.find(n => n.id === noteId);
    if (!note) return;
    
    setSelectedNote(noteId);
    
    const boardRect = boardRef.current.getBoundingClientRect();
    const startX = (e.clientX - boardRect.left - boardPosition.x) / scale;
    const startY = (e.clientY - boardRect.top - boardPosition.y) / scale;
    
    const onMouseMove = (moveEvent) => {
      const currentX = (moveEvent.clientX - boardRect.left - boardPosition.x) / scale;
      const currentY = (moveEvent.clientY - boardRect.top - boardPosition.y) / scale;
      
      const deltaX = currentX - startX;
      const deltaY = currentY - startY;
      
      setNotes(notes.map(n => 
        n.id === noteId 
          ? { ...n, x: note.x + deltaX, y: note.y + deltaY } 
          : n
      ));
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };
  
  // Edit a note
  const editNote = (noteId) => {
    setSelectedNote(noteId);
    setIsEditingNote(true);
  };
  
  // Save the edited note
  const saveNote = (text) => {
    setNotes(notes.map(note => 
      note.id === selectedNote ? { ...note, text } : note
    ));
    setIsEditingNote(false);
  };
  
  // Delete a note with animation
  const deleteNote = (noteId) => {
    const noteIndex = notes.findIndex(note => note.id === noteId);
    if (noteIndex !== -1) {
      const updatedNotes = [...notes];
      updatedNotes[noteIndex] = { ...updatedNotes[noteIndex], isDeleting: true };
      setNotes(updatedNotes);
      
      setTimeout(() => {
        setNotes(notes.filter(note => note.id !== noteId));
        setSelectedNote(null);
        setIsEditingNote(false);
      }, 300);
    }
  };
  
  // Zoom in/out with better constraints and sensitivity
  const handleZoom = (delta) => {
    setScale(prevScale => {
      const newScale = prevScale + delta;
      return newScale > 0.25 && newScale < 5 ? newScale : prevScale;
    });
  };

  // Handle mouse wheel for zooming
  const handleWheel = (e) => {
    if (e.ctrlKey || e.metaKey) {
      e.preventDefault();
      const delta = e.deltaY < 0 ? 0.05 : -0.05;
      handleZoom(delta);
    }
  };
  
  // Reset board position and scale
  const resetView = () => {
    setBoardPosition({ x: 0, y: 0 });
    setScale(1);
  };
  
  // Handle click outside a note to close editor
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isEditingNote && editRef.current && !editRef.current.contains(e.target)) {
        const editedNote = notes.find(note => note.id === selectedNote);
        if (editedNote) {
          saveNote(editedNote.text);
        }
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isEditingNote, selectedNote, notes]);
  
  // Focus textarea when editing
  useEffect(() => {
    if (isEditingNote && editRef.current) {
      const textarea = editRef.current.querySelector('textarea');
      if (textarea) {
        textarea.focus();
      }
    }
  }, [isEditingNote]);

  // Prevent zoom on ctrl+wheel
  useEffect(() => {
    const preventDefaultWheel = (e) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
      }
    };
    
    boardRef.current?.addEventListener('wheel', preventDefaultWheel, { passive: false });
    return () => boardRef.current?.removeEventListener('wheel', preventDefaultWheel);
  }, []);
  
  // Format time relative to now
  const formatRelativeTime = (timestamp) => {
    const now = new Date();
    const diffMs = now - new Date(timestamp);
    const diffMins = Math.floor(diffMs / 60000);
    
    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    
    const diffHours = Math.floor(diffMins / 60);
    if (diffHours < 24) return `${diffHours}h ago`;
    
    const diffDays = Math.floor(diffHours / 24);
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays}d ago`;
    
    return new Date(timestamp).toLocaleDateString();
  };
  
  return (
    <div className={`flex flex-col h-screen overflow-hidden ${darkMode ? 'dark' : ''}`}>
      <div className={`${darkMode ? 'bg-gray-900 text-gray-100' : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white'} p-4 flex justify-between items-center shadow-lg`}>
        <div className="flex items-center gap-3">
          <h1 className="text-xl font-bold tracking-tight">Brainstorm Board</h1>
         
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-white text-blue-600 hover:bg-blue-50'} px-4 py-2 rounded-full font-medium transition-all shadow-md flex items-center gap-2`}
            onClick={addNote}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            New Note
          </button>
          
         
          
          <div className="flex items-center gap-2">
            <button
              className={`w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all ${showGrid ? 'text-white' : 'text-gray-400'}`}
              onClick={() => setShowGrid(!showGrid)}
              title={showGrid ? "Hide Grid" : "Show Grid"}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM14 11a1 1 0 011 1v1h1a1 1 0 110 2h-1v1a1 1 0 11-2 0v-1h-1a1 1 0 110-2h1v-1a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all"
              onClick={resetView}
              title="Reset View"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
            </button>
            
            <button
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-white hover:bg-opacity-20 transition-all"
              onClick={() => setDarkMode(!darkMode)}
              title={darkMode ? "Light Mode" : "Dark Mode"}
            >
              {darkMode ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      
      <div 
        className={`flex-grow relative overflow-hidden ${isDraggingBoard ? 'cursor-grabbing' : 'cursor-grab'} ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}
        ref={boardRef}
        onMouseDown={startDraggingBoard}
        onMouseMove={moveBoard}
        onMouseUp={endDraggingBoard}
        onMouseLeave={endDraggingBoard}
        onDoubleClick={addNote}
        onWheel={handleWheel}
      >
        <div 
          className="absolute origin-top-left w-full h-full transition-transform duration-100"
          style={{ 
            transform: `translate(${boardPosition.x}px, ${boardPosition.y}px) scale(${scale})`,
          }}
        >
          {/* Grid pattern */}
          {showGrid && (
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern 
                  id="grid" 
                  width="40" 
                  height="40" 
                  patternUnits="userSpaceOnUse"
                >
                  <path 
                    d="M 40 0 L 0 0 0 40" 
                    fill="none" 
                    stroke={darkMode ? "#333333" : "#e5e5e5"} 
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          )}
          
          {/* Render notes */}
          {notes.map(note => (
            <motion.div
              key={note.id}
              className={`absolute rounded-lg overflow-hidden ${
                darkMode ? 'shadow-xl shadow-black/30' : 'shadow-lg'
              } ${selectedNote === note.id ? 'ring-2 ring-blue-500 z-10' : 'z-1'} ${
                note.isDeleting ? 'scale-0 opacity-0' : ''
              }`}
              style={{
                left: `${note.x}px`,
                top: `${note.y}px`,
                width: `${note.width}px`,
                height: `${note.height}px`,
                backgroundColor: note.color,
                transition: note.isDeleting ? 'all 0.3s ease-out' : '',
                transform: isAddingNote && note.id === selectedNote ? 'scale(0.8)' : 'scale(1)',
                opacity: isAddingNote && note.id === selectedNote ? 0.8 : 1,
              }}
              initial={note.id === selectedNote && isAddingNote ? { scale: 0.8, opacity: 0 } : false}
              animate={note.id === selectedNote && isAddingNote ? { scale: 1, opacity: 1 } : false}
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
              onMouseDown={(e) => startDraggingNote(e, note.id)}
              onClick={(e) => {
                e.stopPropagation();
                setSelectedNote(note.id);
              }}
              onDoubleClick={(e) => {
                e.stopPropagation();
                editNote(note.id);
              }}
            >
              <div className={`${darkMode ? 'bg-black/30' : 'bg-black/10'} px-3 py-2 flex justify-between items-center`}>
                <div className="flex flex-col text-xs">
                  <span className="opacity-70 font-medium">{note.created}</span>
                  <span className="text-xs opacity-50">{formatRelativeTime(note.timestamp)}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    className="opacity-70 hover:opacity-100 transition-opacity w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10"
                    onClick={(e) => {
                      e.stopPropagation();
                      editNote(note.id);
                    }}
                    title="Edit Note"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                  </button>
                  <button
                    className="opacity-70 hover:opacity-100 transition-opacity w-6 h-6 rounded-full flex items-center justify-center hover:bg-black/10 text-red-600"
                    onClick={(e) => {
                      e.stopPropagation();
                      deleteNote(note.id);
                    }}
                    title="Delete Note"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
          
              {isEditingNote && selectedNote === note.id ? (
                <div 
                  ref={editRef}
                  className="p-3 h-full flex flex-col"
                  onClick={(e) => e.stopPropagation()}
                >
                  <textarea
                    className="w-full flex-grow resize-none p-0 bg-transparent border-none focus:outline-none focus:ring-0 font-medium"
                    value={note.text}
                    onChange={(e) => {
                      setNotes(notes.map(n => 
                        n.id === note.id ? { ...n, text: e.target.value } : n
                      ));
                    }}
                    placeholder="What's on your mind?"
                    style={{ 
                      height: `${note.height - 80}px`,
                      color: darkMode ? '#1a1a1a' : 'inherit'
                    }}
                  />
                  <div className="flex justify-end mt-2">
                    <button
                      className={`${darkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white text-xs px-3 py-1 rounded-full font-medium shadow transition-colors`}
                      onClick={() => saveNote(note.text)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              ) : (
                <div 
                  className="p-4 whitespace-pre-wrap overflow-auto font-medium"
                  style={{ 
                    height: `${note.height - 44}px`,
                    color: darkMode ? '#1a1a1a' : 'inherit'
                  }}
                >
                  {note.text || (
                    <span className="opacity-50 italic">
                      Double-click to add your thoughts...
                    </span>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className={`${darkMode ? 'bg-gray-900 text-gray-400' : 'bg-gray-100 text-gray-500'} p-3 text-xs font-medium flex justify-between items-center`}>
        <div>
          Double-click anywhere to add a note • Drag notes to move • Drag empty space to pan
        </div>
        <div>
          <kbd className="px-2 py-1 mx-1 rounded text-xs bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">Ctrl</kbd> + 
          <kbd className="px-2 py-1 mx-1 rounded text-xs bg-gray-200 text-gray-700 dark:bg-gray-700 dark:text-gray-300">Scroll</kbd> to zoom
        </div>
      </div>
    </div>
  );
};

export default Notes;