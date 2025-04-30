// // // // import React, { useState } from 'react';
// // // // import { useParams } from 'react-router-dom';

// // // // const lectures = [
// // // //   { id: 1, title: 'Introduction to React', uploadedDate: '2025-02-10', video: '/videos/react-intro.mp4' },
// // // //   { id: 2, title: 'Understanding Tailwind CSS', uploadedDate: '2025-02-11', video: '/videos/tailwind-css.mp4' },
// // // //   { id: 3, title: 'React + Django Integration', uploadedDate: '2025-02-12', video: '/videos/react-django.mp4' },
// // // //   { id: 4, title: 'Building a Quiz App', uploadedDate: '2025-02-13', video: '/videos/quiz-app.mp4' },
// // // //   { id: 5, title: 'Dynamic Content with GenAI', uploadedDate: '2025-02-14', video: '/videos/genai-content.mp4' },
// // // // ];

// // // // const LectureDetailPage = () => {
// // // //   const { id } = useParams();
// // // //   const [selectedFile, setSelectedFile] = useState(null);
// // // //   const lecture = lectures.find((lec) => lec.id === parseInt(id));

// // // //   if (!lecture) {
// // // //     return <p className="p-6 text-red-500">Lecture not found.</p>;
// // // //   }

// // // //   const handleFileChange = (event) => {
// // // //     const file = event.target.files[0];
// // // //     setSelectedFile(file);
// // // //   };

// // // //   const summarise = () => {
// // // //     if (selectedFile) {
// // // //       console.log(`Summarizing file: ${selectedFile.name}`);
// // // //       // Add logic for summarizing the uploaded file here
// // // //     } else {
// // // //       alert('Please upload a file first!');
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div className="px-15 py-6">
// // // //       <h1 className="text-3xl font-bold mb-4">{lecture.title}</h1>
// // // //       <p className="text-gray-500 mb-2">Uploaded on: {lecture.uploadedDate}</p>
// // // //       <div className="flex justify-between">
// // // //         <div className="w-[50vw] h-[60vh] bg-gray-200 mb-4">
// // // //           <video controls className="w-full h-full rounded-lg">
// // // //             <source src={lecture.video} type="video/mp4" />
// // // //             Your browser does not support the video tag.
// // // //           </video>
// // // //         </div>

// // // //         <div className="w-[40vw] border border-gray-400 rounded-4xl p-4">
// // // //           <div className="p-4 bg-gray-400 w-[250px] h-[50px] rounded-full flex justify-between items-center border-b"> <h1 className="text-xl font-bold">Download Notes</h1> <div className="w-6 h-6 flex items-center justify-center"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6" > <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" /> </svg> </div> </div>


// // // //           <button onClick={summarise} className="p-4 bg-gray-400 w-[250px] h-[50px] rounded-full flex justify-between items-center border-b mt-5">
// // // //             <h1 className="text-xl font-bold">Summarise Lecture</h1>
// // // //             <div className="w-6 h-6 flex items-center justify-center">
// // // //               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M15 3H21V8H19V5H15V3ZM9 3V5H5V8H3V3H9ZM15 21V19H19V16H21V21H15ZM9 21H3V16H5V19H9V21ZM3 11H21V13H3V11Z"></path></svg>
// // // //             </div>
// // // //           </button>

// // // //           <div className="px-2 py-5">
// // // //             <h1 className="text-xl font-bold">Summary:</h1>
// // // //             {/* <p>
// // // //               {selectedFile ? `File ready for summary: ${selectedFile.name}` : 'No file uploaded yet.'}
// // // //             </p> */}
// // // //             <p>
// // // //               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia quis eum tempora et, sit illum dicta maxime natus tenetur provident itaque perferendis, earum beatae repellendus aperiam ea expedita eligendi fugit blanditiis praesentium at porro amet perspiciatis? Sapiente corporis suscipit numquam odit ipsa dignissimos voluptatum, non iusto ut tempore recusandae cum nostrum odio veniam eaque doloremque atque deleniti eligendi saepe tempora eius. Praesentium, numquam iure exercitationem dignissimos doloribus amet et expedita temporibus magn
// // // //             </p>
// // // //           </div>
// // // //         </div>
// // // //       </div>

// // // //       <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-5" onClick={() => window.history.back()}>
// // // //         Go Back
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LectureDetailPage;


// // // // import React, { useState, useEffect } from 'react';
// // // // import { useParams } from 'react-router-dom';
// // // // import axios from 'axios';

// // // // const LectureDetailPage = () => {
// // // //   const { id } = useParams();
// // // //   const [lecture, setLecture] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [summary, setSummary] = useState('');
// // // //   const [summarizing, setSummarizing] = useState(false);


// // // //   useEffect(() => {
// // // //     fetchLectureDetails();
// // // //   }, [id]);

// // // //   const fetchLectureDetails = async () => {
// // // //     try {
// // // //       const response = await axios.get(`http://127.0.0.1:8000/resources/${id}/`);
// // // //       console.log(response)
// // // //       setLecture(response.data);
// // // //       setLoading(false);
// // // //     } catch (err) {
// // // //       console.error('Error fetching lecture details:', err);
// // // //       setError('Failed to load lecture details');
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleDownload = async (fileType, fileName) => {
// // // //     try {
// // // //       const response = await axios({
// // // //         url: `http://127.0.0.1:8000/resources/${id}/download_${fileType}/`,
// // // //         method: 'GET',
// // // //         responseType: 'blob', // Important for handling files
// // // //       });

// // // //       // Create a blob from the response
// // // //       const blob = new Blob([response.data]);
// // // //       const url = window.URL.createObjectURL(blob);

// // // //       // Create temporary link and trigger download
// // // //       const link = document.createElement('a');
// // // //       link.href = url;
// // // //       link.setAttribute('download', fileName);
// // // //       document.body.appendChild(link);
// // // //       link.click();

// // // //       // Cleanup
// // // //       window.URL.revokeObjectURL(url);
// // // //       document.body.removeChild(link);
// // // //     } catch (error) {
// // // //       console.error('Download error:', error);
// // // //       alert('Failed to download file');
// // // //     }
// // // //   };

// // // //   const summarise = async () => {
// // // //     try {
// // // //       setSummarizing(true);
// // // //       // Correct URL format
// // // //       const response = await axios.post(
// // // //         `http://127.0.0.1:8000/resources/${id}/summarize/`  // Remove the extra '1/'
// // // //       );

// // // //       console.log('Summary response:', response.data); // Debug log

// // // //       if (response.data.status === 'success') {
// // // //         setSummary(response.data.summary);
// // // //       } else {
// // // //         throw new Error(response.data.error || 'Failed to generate summary');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error generating summary:', error);
// // // //       alert(error.response?.data?.error || 'Failed to generate summary');
// // // //     } finally {
// // // //       setSummarizing(false);
// // // //     }
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex justify-center items-center h-screen">
// // // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error || !lecture) {
// // // //     return <p className="p-6 text-red-500">{error || 'Lecture not found.'}</p>;
// // // //   }

// // // //   const getVideoUrl = (videoPath) => {
// // // //     if (!videoPath) return null;
// // // //     // If the path is already a full URL, return it
// // // //     if (videoPath.startsWith('http')) return videoPath;
// // // //     // Otherwise, construct the full URL
// // // //     return `http://localhost:8000${videoPath}`;
// // // //   };


// // // //   return (
// // // //     <div className="px-15 py-6">
// // // //       <h1 className="text-3xl font-bold mb-4">{lecture.title}</h1>
// // // //       <p className="text-gray-500 mb-2">
// // // //         Uploaded on: {new Date(lecture.created_at).toLocaleDateString()}
// // // //       </p>

// // // //       <div className="flex justify-between">
// // // //         <div className="w-[50vw] h-[60vh] bg-gray-200 mb-4 rounded-lg overflow-hidden">
// // // //           {lecture?.lecture ? (
// // // //             <video
// // // //               key={getVideoUrl(lecture.lecture)} // Add key to force re-render when source changes
// // // //               controls
// // // //               className="w-full h-full object-contain"
// // // //               preload="metadata"
// // // //               controlsList="nodownload" // Optional: prevent download
// // // //             >
// // // //               <source
// // // //                 src={getVideoUrl(lecture.lecture)}
// // // //                 type="video/mp4"
// // // //               />
// // // //               Your browser does not support the video tag.
// // // //             </video>
// // // //           ) : (
// // // //             <div className="w-full h-full flex items-center justify-center text-gray-500">
// // // //               No video available
// // // //             </div>
// // // //           )}
// // // //         </div>

// // // //         <div className="w-[40vw] border border-gray-400 rounded-4xl p-4">
// // // //           {/* Download buttons for both files */}
// // // //           {lecture?.file1 && (
// // // //             <button
// // // //               onClick={() => handleDownload('file1', `${lecture.title}_resource1.pdf`)}
// // // //               className="p-4 bg-gray-400 w-[250px] h-[50px] rounded-full flex justify-between items-center border-b mb-3"
// // // //             >
// // // //               <h1 className="text-xl font-bold">Download Notes 1</h1>
// // // //               <div className="w-6 h-6 flex items-center justify-center">
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// // // //                   <path d="M3 19H21V21H3V19ZM13 13.1716L19.0711 7.1005L20.4853 8.51472L12 17L3.51472 8.51472L4.92893 7.1005L11 13.1716V2H13V13.1716Z" />
// // // //                 </svg>
// // // //               </div>
// // // //             </button>
// // // //           )}

        

// // // //           <button
// // // //             onClick={summarise}
// // // //             disabled={summarizing}
// // // //             className={`p-4 bg-gray-400 w-[250px] h-[50px] rounded-full flex justify-between items-center border-b mt-5 ${summarizing ? 'opacity-50 cursor-not-allowed' : ''
// // // //               }`}
// // // //           >
// // // //             <h1 className="text-xl font-bold">
// // // //               {summarizing ? 'Summarizing...' : 'Summarise Lecture'}
// // // //             </h1>
// // // //             <div className="w-6 h-6 flex items-center justify-center">
// // // //               {summarizing ? (
// // // //                 <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
// // // //               ) : (
// // // //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
// // // //                   <path d="M15 3H21V8H19V5H15V3ZM9 3V5H5V8H3V3H9ZM15 21V19H19V16H21V21H15ZM9 21H3V16H5V19H9V21ZM3 11H21V13H3V11Z"></path>
// // // //                 </svg>
// // // //               )}
// // // //             </div>
// // // //           </button>

// // // //           {/* Summary section */}
// // // //           <div className="px-2 py-5">
// // // //             <h1 className="text-xl font-bold">Summary:</h1>
// // // //             {summarizing ? (
// // // //               <div className="mt-3 text-gray-500">Generating summary...</div>
// // // //             ) : (
// // // //               <p className="mt-3 text-gray-700">
// // // //                 {summary || 'Click "Summarise Lecture" to generate a summary.'}
// // // //               </p>
// // // //             )}
// // // //           </div>

         
// // // //         </div>
// // // //       </div>

// // // //       <button
// // // //         className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 mt-5"
// // // //         onClick={() => window.history.back()}
// // // //       >
// // // //         Go Back
// // // //       </button>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LectureDetailPage;





// // // // import React, { useState, useEffect, useRef } from 'react';
// // // // import { useParams } from 'react-router-dom';
// // // // import axios from 'axios';
// // // // import { Download, ArrowLeft, FileText, RefreshCw, AlertTriangle } from 'lucide-react';

// // // // const API_URL = "https://detect.roboflow.com/driver-fatigue/2";
// // // // const API_KEY = "963hJ2hzap5b1YqukTuE";
// // // // const ALERT_COOLDOWN = 10000; // 10 seconds in milliseconds

// // // // const LectureDetailPage = () => {
// // // //   const { id } = useParams();
// // // //   const [lecture, setLecture] = useState(null);
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [error, setError] = useState(null);
// // // //   const [summary, setSummary] = useState('');
// // // //   const [summarizing, setSummarizing] = useState(false);
  
// // // //   // Fatigue detection states
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const [detectionStatus, setDetectionStatus] = useState('Awake');
// // // //   const [showAlert, setShowAlert] = useState(false);
// // // //   const videoRef = useRef(null);
// // // //   const lastAlertTimeRef = useRef(0);
// // // //   const fatigueVideoRef = useRef(null);

// // // //   useEffect(() => {
// // // //     fetchLectureDetails();
// // // //   }, [id]);

// // // //   // Fatigue detection functions
// // // //   const speakAlert = (message) => {
// // // //     const speech = new SpeechSynthesisUtterance(message);
// // // //     speech.rate = 0.9;
// // // //     speech.pitch = 1;
// // // //     speech.volume = 1;
// // // //     window.speechSynthesis.speak(speech);
// // // //   };

// // // //   const detectFatigue = async () => {
// // // //     if (!fatigueVideoRef.current) return;

// // // //     const video = fatigueVideoRef.current;
// // // //     const canvas = document.createElement('canvas');
// // // //     canvas.width = video.videoWidth;
// // // //     canvas.height = video.videoHeight;
// // // //     const ctx = canvas.getContext('2d');
// // // //     ctx.drawImage(video, 0, 0);

// // // //     try {
// // // //       const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
// // // //       const formData = new FormData();
// // // //       formData.append('file', blob);

// // // //       const response = await fetch(`${API_URL}?api_key=${API_KEY}`, {
// // // //         method: 'POST',
// // // //         body: formData
// // // //       });
// // // //       const result = await response.json();

// // // //       if (result.predictions) {
// // // //         const currentTime = Date.now();
// // // //         for (const prediction of result.predictions) {
// // // //           if (prediction.class.toLowerCase().includes('drowsy')) {
// // // //             setDetectionStatus('Drowsy');
// // // //             if (currentTime - lastAlertTimeRef.current >= ALERT_COOLDOWN) {
// // // //               setShowAlert(true);
// // // //               speakAlert("You seem tired. Please take a break and freshen up.");
// // // //               lastAlertTimeRef.current = currentTime;
// // // //               setTimeout(() => {
// // // //                 setShowAlert(false);
// // // //               }, 10000);
// // // //             }
// // // //           } else {
// // // //             setDetectionStatus('Awake');
// // // //             setShowAlert(false);
// // // //           }
// // // //         }
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Error during fatigue detection:", error);
// // // //     }
// // // //   };

// // // //   // Initialize fatigue detection
// // // //   useEffect(() => {
// // // //     const initCamera = async () => {
// // // //       try {
// // // //         const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // // //         if (fatigueVideoRef.current) {
// // // //           fatigueVideoRef.current.srcObject = stream;
// // // //         }
// // // //       } catch (error) {
// // // //         console.error("Error accessing camera:", error);
// // // //       }
// // // //     };

// // // //     initCamera();
// // // //     const timer = setTimeout(() => setIsVisible(true), 100);
// // // //     const detectionInterval = setInterval(detectFatigue, 1000);

// // // //     return () => {
// // // //       clearTimeout(timer);
// // // //       clearInterval(detectionInterval);
// // // //       if (fatigueVideoRef.current?.srcObject) {
// // // //         fatigueVideoRef.current.srcObject.getTracks().forEach(track => track.stop());
// // // //       }
// // // //     };
// // // //   }, []);

// // // //   // Existing functions
// // // //   const fetchLectureDetails = async () => {
// // // //     try {
// // // //       const response = await axios.get(`http://127.0.0.1:8000/resources/${id}/`);
// // // //       setLecture(response.data);
// // // //       setLoading(false);
// // // //     } catch (err) {
// // // //       console.error('Error fetching lecture details:', err);
// // // //       setError('Failed to load lecture details');
// // // //       setLoading(false);
// // // //     }
// // // //   };

// // // //   const handleDownload = async (fileType, fileName) => {
// // // //     try {
// // // //       const response = await axios({
// // // //         url: `http://127.0.0.1:8000/resources/${id}/download_${fileType}/`,
// // // //         method: 'GET',
// // // //         responseType: 'blob',
// // // //       });

// // // //       const blob = new Blob([response.data]);
// // // //       const url = window.URL.createObjectURL(blob);
// // // //       const link = document.createElement('a');
// // // //       link.href = url;
// // // //       link.setAttribute('download', fileName);
// // // //       document.body.appendChild(link);
// // // //       link.click();
// // // //       window.URL.revokeObjectURL(url);
// // // //       document.body.removeChild(link);
// // // //     } catch (error) {
// // // //       console.error('Download error:', error);
// // // //       alert('Failed to download file');
// // // //     }
// // // //   };

// // // //   const summarise = async () => {
// // // //     try {
// // // //       setSummarizing(true);
// // // //       const response = await axios.post(
// // // //         `http://127.0.0.1:8000/resources/${id}/summarize/`
// // // //       );

// // // //       if (response.data.status === 'success') {
// // // //         setSummary(response.data.summary);
// // // //       } else {
// // // //         throw new Error(response.data.error || 'Failed to generate summary');
// // // //       }
// // // //     } catch (error) {
// // // //       console.error('Error generating summary:', error);
// // // //       alert(error.response?.data?.error || 'Failed to generate summary');
// // // //     } finally {
// // // //       setSummarizing(false);
// // // //     }
// // // //   };

// // // //   const getVideoUrl = (videoPath) => {
// // // //     if (!videoPath) return null;
// // // //     return videoPath.startsWith('http') ? videoPath : `http://localhost:8000${videoPath}`;
// // // //   };

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
// // // //         <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-500 border-t-transparent"></div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   if (error || !lecture) {
// // // //     return (
// // // //       <div className="flex justify-center items-center h-screen bg-gradient-to-br from-blue-50 to-blue-100">
// // // //         <div className="bg-white p-8 rounded-2xl shadow-xl text-center">
// // // //           <p className="text-xl text-red-500 font-medium mb-4">{error || 'Lecture not found.'}</p>
// // // //           <button
// // // //             onClick={() => window.history.back()}
// // // //             className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300"
// // // //           >
// // // //             Go Back
// // // //           </button>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return (
// // // //     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-8">
// // // //       <div className="max-w-7xl mx-auto">
// // // //         <button
// // // //           onClick={() => window.history.back()}
// // // //           className="flex items-center text-blue-600 hover:text-blue-700 mb-6 group"
// // // //         >
// // // //           <ArrowLeft className="mr-2 transform group-hover:-translate-x-1 transition-transform duration-300" />
// // // //           <span>Back to Lectures</span>
// // // //         </button>

// // // //         {/* Fatigue Detection Alert */}
// // // //         {showAlert && (
// // // //           <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl flex items-center justify-between animate-pulse">
// // // //             <div className="flex items-center">
// // // //               <AlertTriangle className="mr-2" />
// // // //               <span className="font-medium">You seem tired. Please take a break and freshen up.</span>
// // // //             </div>
// // // //             <button
// // // //               onClick={() => setShowAlert(false)}
// // // //               className="text-red-500 hover:text-red-700"
// // // //             >
// // // //               ×
// // // //             </button>
// // // //           </div>
// // // //         )}

// // // //         <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
// // // //           <div className="p-6">
// // // //             <h1 className="text-3xl font-bold text-gray-800 mb-2">{lecture.title}</h1>
// // // //             <p className="text-gray-500">
// // // //               Uploaded on: {new Date(lecture.created_at).toLocaleDateString()}
// // // //             </p>
// // // //           </div>

// // // //           <div className="flex flex-col lg:flex-row gap-8 p-6">
// // // //             {/* Video Section */}
// // // //             <div className="lg:w-3/5">
// // // //               <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg">
// // // //                 {lecture?.lecture ? (
// // // //                   <video
// // // //                     key={getVideoUrl(lecture.lecture)}
// // // //                     controls
// // // //                     className="w-full aspect-video"
// // // //                     preload="metadata"
// // // //                     controlsList="nodownload"
// // // //                     ref={videoRef}
// // // //                   >
// // // //                     <source src={getVideoUrl(lecture.lecture)} type="video/mp4" />
// // // //                     Your browser does not support the video tag.
// // // //                   </video>
// // // //                 ) : (
// // // //                   <div className="w-full aspect-video flex items-center justify-center text-gray-400">
// // // //                     No video available
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>

// // // //             {/* Resources Section */}
// // // //             <div className="lg:w-2/5 space-y-6">
// // // //               {/* Hidden fatigue detection video */}
// // // //               <video
// // // //                   ref={videoRef}
// // // //                   autoPlay
// // // //                   playsInline
// // // //                   muted
// // // //                   className="fixed top-4 right-4 w-64 h-48 rounded-lg"
// // // //                   style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}
// // // //                 />

// // // //               <div className="bg-blue-50 rounded-xl p-6 shadow-md">
// // // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Resources</h2>
// // // //                 {lecture?.file1 && (
// // // //                   <button
// // // //                     onClick={() => handleDownload('file1', `${lecture.title}_resource1.pdf`)}
// // // //                     className="w-full bg-white text-gray-700 px-4 py-3 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-between shadow-sm mb-3"
// // // //                   >
// // // //                     <div className="flex items-center">
// // // //                       <FileText className="mr-3 text-blue-600" />
// // // //                       <span className="font-medium">Lecture Notes</span>
// // // //                     </div>
// // // //                     <Download className="text-blue-600" />
// // // //                   </button>
// // // //                 )}

// // // //                 <button
// // // //                   onClick={summarise}
// // // //                   disabled={summarizing}
// // // //                   className={`w-full bg-blue-600 text-white px-4 py-3 rounded-xl hover:bg-blue-700 transition-all duration-300 flex items-center justify-between shadow-md ${
// // // //                     summarizing ? 'opacity-75 cursor-not-allowed' : ''
// // // //                   }`}
// // // //                 >
// // // //                   <span className="font-medium">
// // // //                     {summarizing ? 'Generating Summary...' : 'Generate Summary'}
// // // //                   </span>
// // // //                   {summarizing ? (
// // // //                     <RefreshCw className="animate-spin" />
// // // //                   ) : (
// // // //                     <RefreshCw />
// // // //                   )}
// // // //                 </button>
// // // //               </div>

// // // //               {/* Summary Section */}
// // // //               <div className="bg-white rounded-xl p-6 shadow-md">
// // // //                 <h2 className="text-xl font-bold text-gray-800 mb-4">Lecture Summary</h2>
// // // //                 {summarizing ? (
// // // //                   <div className="flex items-center justify-center h-32 text-gray-500">
// // // //                     <RefreshCw className="animate-spin mr-2" />
// // // //                     <span>Generating summary...</span>
// // // //                   </div>
// // // //                 ) : (
// // // //                   <div className="prose max-w-none">
// // // //                     <p className="text-gray-600">
// // // //                       {summary || 'Click "Generate Summary" to create a summary of this lecture.'}
// // // //                     </p>
// // // //                   </div>
// // // //                 )}
// // // //               </div>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default LectureDetailPage;


// // // import React, { useState, useEffect, useRef } from 'react';
// // // import { useParams } from 'react-router-dom';
// // // import axios from 'axios';

// // // const API_URL = "https://detect.roboflow.com/driver-fatigue/2";
// // // const API_KEY = "963hJ2hzap5b1YqukTuE";
// // // const ALERT_COOLDOWN = 10000; // 10 seconds in milliseconds

// // // const LectureDetailPage = () => {
// // //   const { id } = useParams();
// // //   const [lecture, setLecture] = useState(null);
// // //   const [loading, setLoading] = useState(true);
// // //   const [error, setError] = useState(null);
// // //   const [summary, setSummary] = useState('');
// // //   const [summarizing, setSummarizing] = useState(false);

// // //   // Drowsiness detection states
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [detectionStatus, setDetectionStatus] = useState('Awake');
// // //   const [showAlert, setShowAlert] = useState(false);
// // //   const videoRef = useRef(null);
// // //   const lastAlertTimeRef = useRef(0);

// // //   useEffect(() => {
// // //     fetchLectureDetails();
// // //     initializeDrowsinessDetection();

// // //     return () => {
// // //       // Cleanup for drowsiness detection
// // //       if (videoRef.current?.srcObject) {
// // //         videoRef.current.srcObject.getTracks().forEach(track => track.stop());
// // //       }
// // //     };
// // //   }, [id]);

// // //   // Drowsiness detection functions
// // //   const speakAlert = (message) => {
// // //     const speech = new SpeechSynthesisUtterance(message);
// // //     speech.rate = 0.9;
// // //     speech.pitch = 1;
// // //     speech.volume = 1;
// // //     window.speechSynthesis.speak(speech);
// // //   };

// // //   const detectFatigue = async () => {
// // //     if (!videoRef.current) return;

// // //     const video = videoRef.current;
// // //     const canvas = document.createElement('canvas');
// // //     canvas.width = video.videoWidth;
// // //     canvas.height = video.videoHeight;
// // //     const ctx = canvas.getContext('2d');
// // //     ctx.drawImage(video, 0, 0);

// // //     try {
// // //       const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
// // //       const formData = new FormData();
// // //       formData.append('file', blob);

// // //       const response = await fetch(`${API_URL}?api_key=${API_KEY}`, {
// // //         method: 'POST',
// // //         body: formData
// // //       });
// // //       const result = await response.json();

// // //       if (result.predictions) {
// // //         const currentTime = Date.now();

// // //         for (const prediction of result.predictions) {
// // //           if (prediction.class.toLowerCase().includes('drowsy')) {
// // //             setDetectionStatus('Drowsy');

// // //             if (currentTime - lastAlertTimeRef.current >= ALERT_COOLDOWN) {
// // //               setShowAlert(true);
// // //               speakAlert("Alert! You seem tired. Please take a break and freshen up.");
// // //               lastAlertTimeRef.current = currentTime;

// // //               setTimeout(() => {
// // //                 setShowAlert(false);
// // //               }, 10000);
// // //             }
// // //           } else {
// // //             setDetectionStatus('Awake');
// // //             setShowAlert(false);
// // //           }
// // //         }
// // //       }
// // //     } catch (error) {
// // //       console.error("Error during fatigue detection:", error);
// // //     }
// // //   };

// // //   const initializeDrowsinessDetection = async () => {
// // //     try {
// // //       const stream = await navigator.mediaDevices.getUserMedia({ video: true });
// // //       if (videoRef.current) {
// // //         videoRef.current.srcObject = stream;
// // //       }

// // //       // Animation delay
// // //       const timer = setTimeout(() => setIsVisible(true), 100);

// // //       // Start detection interval
// // //       const detectionInterval = setInterval(detectFatigue, 1000);

// // //       return () => {
// // //         clearTimeout(timer);
// // //         clearInterval(detectionInterval);
// // //       };
// // //     } catch (error) {
// // //       console.error("Error accessing camera:", error);
// // //     }
// // //   };

// // //   // Original functions
// // //   const fetchLectureDetails = async () => {
// // //     try {
// // //       const response = await axios.get(`http://127.0.0.1:8000/resources/${id}/`);
// // //       setLecture(response.data);
// // //       setLoading(false);
// // //     } catch (err) {
// // //       console.error('Error fetching lecture details:', err);
// // //       setError('Failed to load lecture details');
// // //       setLoading(false);
// // //     }
// // //   };

// // //   const handleDownload = async (fileType, fileName) => {
// // //     try {
// // //       const response = await axios({
// // //         url: `http://127.0.0.1:8000/resources/${id}/download_${fileType}/`,
// // //         method: 'GET',
// // //         responseType: 'blob',
// // //       });

// // //       const blob = new Blob([response.data]);
// // //       const url = window.URL.createObjectURL(blob);
// // //       const link = document.createElement('a');
// // //       link.href = url;
// // //       link.setAttribute('download', fileName);
// // //       document.body.appendChild(link);
// // //       link.click();
// // //       window.URL.revokeObjectURL(url);
// // //       document.body.removeChild(link);
// // //     } catch (error) {
// // //       console.error('Download error:', error);
// // //       alert('Failed to download file');
// // //     }
// // //   };

// // //   const summarise = async () => {
// // //     try {
// // //       setSummarizing(true);
// // //       const response = await axios.post(
// // //         `http://127.0.0.1:8000/resources/${id}/summarize/`
// // //       );

// // //       if (response.data.status === 'success') {
// // //         setSummary(response.data.summary);
// // //       } else {
// // //         throw new Error(response.data.error || 'Failed to generate summary');
// // //       }
// // //     } catch (error) {
// // //       console.error('Error generating summary:', error);
// // //       alert(error.response?.data?.error || 'Failed to generate summary');
// // //     } finally {
// // //       setSummarizing(false);
// // //     }
// // //   };

// // //   const getVideoUrl = (videoPath) => {
// // //     if (!videoPath) return null;
// // //     return videoPath.startsWith('http') ? videoPath : `http://localhost:8000${videoPath}`;
// // //   };

// // //   if (loading) {
// // //     return (
// // //       <div className="flex justify-center items-center h-screen">
// // //         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
// // //       </div>
// // //     );
// // //   }

// // //   if (error || !lecture) {
// // //     return <p className="p-6 text-red-500">{error || 'Lecture not found.'}</p>;
// // //   }

// // //   return (
// // //     <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white px-8 py-6">
// // //       {/* Drowsiness detection camera */}
// // //       <video
// // //         ref={videoRef}
// // //         autoPlay
// // //         playsInline
// // //         muted
// // //         className="fixed top-4 right-4 w-64 h-48 rounded-lg shadow-lg border-2 border-blue-200"
// // //         style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}
// // //       />
  
// // //       {showAlert && (
// // //         <div className="fixed top-4 left-1/2 transform -translate-x-1/2 mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center z-50 shadow-lg border border-red-200 animate-pulse">
// // //           <div className="flex items-center space-x-2">
// // //             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
// // //               <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
// // //             </svg>
// // //             <span className="font-semibold">You seem tired. Please take a break and freshen up.</span>
// // //           </div>
// // //         </div>
// // //       )}
  
// // //       <h1 className="text-4xl font-bold mb-4 text-blue-900">{lecture.title}</h1>
// // //       <p className="text-blue-600 mb-6 font-medium">
// // //         Uploaded on: {new Date(lecture.created_at).toLocaleDateString()}
// // //       </p>
  
// // //       <div className="flex justify-between space-x-8">
// // //         <div className="w-[50vw] h-[60vh] bg-white rounded-xl overflow-hidden shadow-lg border border-blue-100">
// // //           {lecture?.lecture ? (
// // //             <video
// // //               key={getVideoUrl(lecture.lecture)}
// // //               controls
// // //               className="w-full h-full object-contain"
// // //               preload="metadata"
// // //               controlsList="nodownload"
// // //             >
// // //               <source src={getVideoUrl(lecture.lecture)} type="video/mp4" />
// // //               Your browser does not support the video tag.
// // //             </video>
// // //           ) : (
// // //             <div className="w-full h-full flex items-center justify-center text-blue-500">
// // //               No video available
// // //             </div>
// // //           )}
// // //         </div>
  
// // //         <div className="w-[40vw] bg-white border border-blue-200 rounded-xl p-6 shadow-lg">
// // //           {lecture?.file1 && (
// // //             <button
// // //               onClick={() => handleDownload('file1', `${lecture.title}_resource1.pdf`)}
// // //               className="w-full p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mb-4 transition-all duration-300 flex justify-between items-center shadow-md"
// // //             >
// // //               <span className="text-xl font-semibold">Download Notes 1</span>
// // //               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
// // //                 <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
// // //               </svg>
// // //             </button>
// // //           )}
  
// // //           <button
// // //             onClick={summarise}
// // //             disabled={summarizing}
// // //             className={`w-full p-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg mb-6 transition-all duration-300 flex justify-between items-center shadow-md ${
// // //               summarizing ? 'opacity-50 cursor-not-allowed' : ''
// // //             }`}
// // //           >
// // //             <span className="text-xl font-semibold">
// // //               {summarizing ? 'Summarizing...' : 'Summarise Lecture'}
// // //             </span>
// // //             {summarizing ? (
// // //               <div className="animate-spin rounded-full h-6 w-6 border-4 border-white border-t-transparent"></div>
// // //             ) : (
// // //               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
// // //                 <path fillRule="evenodd" d="M4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm2-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2z" clipRule="evenodd" />
// // //               </svg>
// // //             )}
// // //           </button>
  
// // //           <div className="bg-blue-50 rounded-lg p-6">
// // //             <h2 className="text-2xl font-bold text-blue-900 mb-4">Summary</h2>
// // //             {summarizing ? (
// // //               <div className="flex items-center space-x-2 text-blue-600">
// // //                 <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
// // //                 <span>Generating summary...</span>
// // //               </div>
// // //             ) : (
// // //               <p className="text-blue-800 leading-relaxed">
// // //                 {summary || 'Click "Summarise Lecture" to generate a summary.'}
// // //               </p>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </div>
  
// // //       <button
// // //         className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-md flex items-center space-x-2"
// // //         onClick={() => window.history.back()}
// // //       >
// // //         <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
// // //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
// // //         </svg>
// // //         <span>Go Back</span>
// // //       </button>
// // //     </div>
// // //   );
// // // };

// // // export default LectureDetailPage;

// // // import React, { useEffect, useState } from 'react';
// // // import axios from 'axios';
// // // import { useParams } from 'react-router-dom';

// // // const LectureDetail = () => {
// // //     const { lectureId } = useParams(); // Get the lectureId from the URL
// // //     const [lecture, setLecture] = useState(null);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);

// // //     useEffect(() => {
// // //         const fetchLecture = async () => {
// // //             try {
// // //                 const response = await axios.get(`http://127.0.0.1:8000/lectures/${lectureId}/`);
// // //                 setLecture(response.data);
// // //                 // console.log(response.data);
// // //             } catch (err) {
// // //                 setError(err.message);
// // //             } finally {
// // //                 setLoading(false);
// // //             }
// // //         };

// // //         fetchLecture();
// // //     }, [lectureId]);

// // //     if (loading) return <p>Loading...</p>;
// // //     if (error) return <p>Error: {error}</p>;

// // //     return (
// // //         <div className="bg-white rounded-lg shadow-md p-6 max-w-4xl mx-auto">
// // //             {lecture ? (
// // //                 <div>
// // //                     <h1 className="text-2xl font-bold text-gray-800">{lecture.title}</h1>
// // //                     <p className="text-gray-600 mb-4">{lecture.content_text}</p>

// // //                     <div className="flex flex-wrap gap-2 mb-3">
// // //                         <span className="px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
// // //                             {lecture.subject}
// // //                         </span>
// // //                         <span className="px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
// // //                             {lecture.difficulty_level}
// // //                         </span>
// // //                     </div>

// // //                     <div className="mb-4">
// // //                         <h2 className="text-lg font-bold mt-4">Video</h2>
// // //                         <video controls width="100%" poster={lecture.video_thumbnail}>
// // //                             <source src={lecture.lecture} type="video/mp4" />
// // //                             Your browser does not support the video tag.
// // //                         </video>
// // //                         <p className="text-sm text-gray-500 mt-2">Duration: {lecture.video_duration}</p>
// // //                     </div>

// // //                     <div className="mb-4">
// // //                         <h2 className="text-lg font-bold mt-4">Lecture Notes</h2>
// // //                         <a href={lecture.file1} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800">
// // //                             Download Lecture Notes (PDF)
// // //                         </a>
// // //                     </div>

// // //                     <div className="mb-4">
// // //                         <h2 className="text-lg font-bold mt-4">Topics</h2>
// // //                         <p><strong>Topic:</strong> {lecture.topics?.topic}</p>
// // //                         <p><strong>Aim:</strong> {lecture.topics?.ACHESE?.Aim}</p>
// // //                         <p><strong>Concept:</strong> {lecture.topics?.ACHESE?.Concept}</p>
                       
// // //                     </div>
                  
                    

                   
// // //                 </div>
// // //             ) : (
// // //                 <p>No lecture found.</p>
// // //             )}
// // //         </div>
// // //     );
// // // };

// // // export default LectureDetail;
// // import React, { useEffect, useState } from 'react';
// // import axios from 'axios';
// // import { useParams, Link } from 'react-router-dom';

// // const LectureDetail = () => {
// //     const { lectureId } = useParams();
// //     const [lecture, setLecture] = useState(null);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
    
// //     useEffect(() => {
// //         const fetchLecture = async () => {
// //             try {
// //                 const response = await axios.get(`http://127.0.0.1:8000/lectures/${lectureId}/`);
// //                 setLecture(response.data);
// //             } catch (err) {
// //                 setError(err.message);
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };
        
// //         fetchLecture();
// //     }, [lectureId]);
    
// //     if (loading) return (
// //         <div className="flex justify-center items-center h-64">
// //             <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
// //         </div>
// //     );
    
// //     if (error) return (
// //         <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-4xl mx-auto">
// //             <p className="text-red-600">Error: {error}</p>
// //         </div>
// //     );
    
// //     return (
// //         <div className="bg-white rounded-lg shadow-md p-6 max-w-6xl mx-auto my-8">
// //             {lecture ? (
// //                 <div>
// //                     <h1 className="text-3xl font-bold text-gray-800 mb-2 border-b pb-2">{lecture.title}</h1>
                    
// //                     <div className="flex flex-wrap gap-2 mb-4">
// //                         <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
// //                             {lecture.subject}
// //                         </span>
// //                         <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
// //                             {lecture.difficulty_level}
// //                         </span>
// //                     </div>
                    
// //                     <div className="flex flex-col md:flex-row gap-8">
// //                         {/* Video on the left */}
// //                         <div className="w-full md:w-1/2">
// //                             <div className="sticky top-8">
// //                                 <h2 className="text-xl font-bold mb-2 text-gray-700">Video Lecture</h2>
// //                                 <div className="rounded-lg overflow-hidden shadow-lg">
// //                                     <video 
// //                                         controls 
// //                                         width="100%" 
// //                                         poster={lecture.video_thumbnail}
// //                                         className="w-full aspect-video"
// //                                     >
// //                                         <source src={lecture.lecture} type="video/mp4" />
// //                                         Your browser does not support the video tag.
// //                                     </video>
// //                                 </div>
// //                                 <p className="text-sm text-gray-500 mt-2 flex items-center">
// //                                     <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
// //                                     </svg>
// //                                     Duration: {lecture.video_duration}
// //                                 </p>
                                
// //                                 {/* Quiz Button */}
// //                                 <Link
// //                                     to={'/quiz'}
// //                                     className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors inline-block"
// //                                 >
// //                                     Take Quiz
// //                                 </Link>
// //                             </div>
// //                         </div>
                        
// //                         {/* Content on the right */}
// //                         <div className="w-full md:w-1/2">
// //                             <div className="mb-6">
// //                                 <h2 className="text-xl font-bold mb-3 text-gray-700">Description</h2>
// //                                 <p className="text-gray-600 leading-relaxed">{lecture.content_text}</p>
// //                             </div>
                            
// //                             <div className="mb-6 bg-gray-50 p-4 rounded-lg">
// //                                 <h2 className="text-xl font-bold mb-3 text-gray-700">Lecture Notes</h2>
// //                                 <a 
// //                                     href={lecture.file1} 
// //                                     target="_blank" 
// //                                     rel="noopener noreferrer" 
// //                                     className="flex items-center text-indigo-600 hover:text-indigo-800 bg-white p-3 rounded-md shadow-sm hover:shadow transition"
// //                                 >
// //                                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
// //                                     </svg>
// //                                     Download Lecture Notes (PDF)
// //                                 </a>
// //                             </div>
                            
// //                             <div className="bg-gray-50 p-4 rounded-lg">
// //                                 <h2 className="text-xl font-bold mb-3 text-gray-700">Topics Covered</h2>
// //                                 <div className="space-y-2">
// //                                     {lecture.topics?.topic && (
// //                                         <div className="bg-white p-3 rounded shadow-sm">
// //                                             <p className="font-semibold text-gray-800">Topic:</p>
// //                                             <p className="text-gray-600">{lecture.topics.topic}</p>
// //                                         </div>
// //                                     )}
                                    
                                   
// //                                 </div>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>
// //             ) : (
// //                 <div className="text-center py-8">
// //                     <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
// //                     </svg>
// //                     <p className="mt-2 text-gray-500">No lecture found.</p>
// //                 </div>
// //             )}
// //         </div>
// //     );
// // };

// // export default LectureDetail;
// import React, { useState, useEffect, useRef } from 'react';
// import { useNavigate, useParams } from 'react-router-dom';
// import axios from 'axios';

// // Drowsiness detection constants
// const API_URL = "https://detect.roboflow.com/driver-fatigue/2";
// const API_KEY = "963hJ2hzap5b1YqukTuE";
// const ALERT_COOLDOWN = 10000; // 10 seconds in milliseconds

// const RoboFlowLecture = () => {
//   const navigate = useNavigate();
//   const { lectureId } = useParams();
//   const [lecture, setLecture] = useState(null);
//   const [recommendations, setRecommendations] = useState([]);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [watchedPercentage, setWatchedPercentage] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [autoplayNext, setAutoplayNext] = useState(false);
//   const [showNextLectureModal, setShowNextLectureModal] = useState(false);
//   const [countdownTimer, setCountdownTimer] = useState(10);
//   const [summary, setSummary] = useState('');
//   const [summarizing, setSummarizing] = useState(false);
//   const videoRef = useRef(null);
  
//   // Drowsiness detection states
//   const [isVisible, setIsVisible] = useState(false);
//   const [detectionStatus, setDetectionStatus] = useState('Awake');
//   const [showAlert, setShowAlert] = useState(false);
//   const cameraRef = useRef(null);
//   const lastAlertTimeRef = useRef(0);
//   const [drowsinessDetectionActive, setDrowsinessDetectionActive] = useState(false);

//   // Fetch current lecture data
//   useEffect(() => {
//     const fetchLecture = async () => {
//       try {
//         const response = await axios.get(`http://127.0.0.1:8000/lectures/${lectureId}/`);
//         setLecture(response.data);
//         // Reset video progress when lecture changes
//         setCurrentTime(0);
//         setWatchedPercentage(0);
//       } catch (err) {
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };
    
//     fetchLecture();
//   }, [lectureId]);

//   // Fetch recommendations based on current lecture
//   useEffect(() => {
//     const fetchRecommendations = async () => {
//       if (!lecture) return;
      
//       try {
//         // Fetch recommendations based on subject, level, etc.
//         const response = await axios.get(`http://127.0.0.1:8000/recommendations/?subject=${lecture.subject}&level=${lecture.difficulty_level}&current=${lectureId}`);
//         setRecommendations(response.data.slice(0, 3)); // Limit to 3 recommendations
//       } catch (err) {
//         console.error('Error fetching recommendations:', err);
//       }
//     };
    
//     fetchRecommendations();
//   }, [lecture, lectureId]);

//   // Drowsiness detection functions
//   const speakAlert = (message) => {
//     const speech = new SpeechSynthesisUtterance(message);
//     speech.rate = 0.9;
//     speech.pitch = 1;
//     speech.volume = 1;
//     window.speechSynthesis.speak(speech);
//   };

//   const detectFatigue = async () => {
//     if (!cameraRef.current || !drowsinessDetectionActive) return;

//     const video = cameraRef.current;
//     const canvas = document.createElement('canvas');
//     canvas.width = video.videoWidth;
//     canvas.height = video.videoHeight;
//     const ctx = canvas.getContext('2d');
//     ctx.drawImage(video, 0, 0);

//     try {
//       const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
//       const formData = new FormData();
//       formData.append('file', blob);

//       const response = await fetch(`${API_URL}?api_key=${API_KEY}`, {
//         method: 'POST',
//         body: formData
//       });
//       const result = await response.json();

//       if (result.predictions) {
//         const currentTime = Date.now();

//         for (const prediction of result.predictions) {
//           if (prediction.class.toLowerCase().includes('drowsy')) {
//             setDetectionStatus('Drowsy');

//             if (currentTime - lastAlertTimeRef.current >= ALERT_COOLDOWN) {
//               setShowAlert(true);
//               speakAlert("Alert! You seem tired. Please take a break and freshen up.");
//               lastAlertTimeRef.current = currentTime;

//               setTimeout(() => {
//                 setShowAlert(false);
//               }, 10000);
//             }
//           } else {
//             setDetectionStatus('Awake');
//             setShowAlert(false);
//           }
//         }
//       }
//     } catch (error) {
//       console.error("Error during fatigue detection:", error);
//     }
//   };

//   // Set up and tear down drowsiness detection
//   useEffect(() => {
//     let detectionInterval;
    
//     if (drowsinessDetectionActive) {
//       const initializeCamera = async () => {
//         try {
//           const stream = await navigator.mediaDevices.getUserMedia({ video: true });
//           if (cameraRef.current) {
//             cameraRef.current.srcObject = stream;
//           }
          
//           // Animation delay
//           const timer = setTimeout(() => setIsVisible(true), 100);
          
//           // Start detection interval
//           detectionInterval = setInterval(detectFatigue, 1000);
          
//           return () => {
//             clearTimeout(timer);
//           };
//         } catch (error) {
//           console.error("Error accessing camera:", error);
//           setDrowsinessDetectionActive(false);
//         }
//       };
      
//       initializeCamera();
//     } else {
//       // Clean up camera if detection is turned off
//       if (cameraRef.current?.srcObject) {
//         cameraRef.current.srcObject.getTracks().forEach(track => track.stop());
//       }
//       setIsVisible(false);
//     }
    
//     return () => {
//       if (detectionInterval) {
//         clearInterval(detectionInterval);
//       }
      
//       // Clean up on component unmount
//       if (cameraRef.current?.srcObject) {
//         cameraRef.current.srcObject.getTracks().forEach(track => track.stop());
//       }
//     };
//   }, [drowsinessDetectionActive]);

//   // Track video progress
//   const handleTimeUpdate = () => {
//     if (!videoRef.current) return;
    
//     const currentTime = videoRef.current.currentTime;
//     const duration = videoRef.current.duration;
    
//     setCurrentTime(currentTime);
//     setWatchedPercentage(Math.floor((currentTime / duration) * 100));
    
//     // When video is near completion (95%), show the next lecture suggestion modal
//     if (currentTime / duration > 0.95 && recommendations.length > 0) {
//       setShowNextLectureModal(true);
//     }
//   };

//   // Countdown timer for autoplay next lecture
//   useEffect(() => {
//     let interval;
    
//     if (showNextLectureModal && autoplayNext) {
//       interval = setInterval(() => {
//         setCountdownTimer((prevTime) => {
//           if (prevTime <= 1) {
//             clearInterval(interval);
//             handleNextLecture();
//             return 10;
//           }
//           return prevTime - 1;
//         });
//       }, 1000);
//     }
    
//     return () => clearInterval(interval);
//   }, [showNextLectureModal, autoplayNext]);

//   // Handle next lecture navigation
//   const handleNextLecture = () => {
//     if (recommendations.length > 0) {
//       navigate(`/lecture/${recommendations[0].id}`);
//       setShowNextLectureModal(false);
//       setCountdownTimer(10);
//     }
//   };

//   // Toggle autoplay
//   const toggleAutoplay = () => {
//     setAutoplayNext(!autoplayNext);
//   };

//   // Toggle drowsiness detection
//   const toggleDrowsinessDetection = () => {
//     setDrowsinessDetectionActive(!drowsinessDetectionActive);
//   };

//   // Handle Watch Now button click
//   const handleWatchNow = (id) => {
//     navigate(`/lecture/${id}`);
//   };

//   // Generate summary
//   const summarizeLecture = async () => {
//     try {
//       setSummarizing(true);
//       const response = await axios.post(
//         `http://127.0.0.1:8000/resources/${lectureId}/summarize/`
//       );

//       if (response.data.status === 'success') {
//         setSummary(response.data.summary);
//       } else {
//         throw new Error(response.data.error || 'Failed to generate summary');
//       }
//     } catch (error) {
//       console.error('Error generating summary:', error);
//       alert(error.response?.data?.error || 'Failed to generate summary');
//     } finally {
//       setSummarizing(false);
//     }
//   };

//   if (loading) return (
//     <div className="flex justify-center items-center h-64">
//       <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
//     </div>
//   );
  
//   if (error) return (
//     <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-4xl mx-auto">
//       <p className="text-red-600">Error: {error}</p>
//     </div>
//   );

//   return (
//     <div className="bg-gradient-to-b from-blue-50 to-white p-6 min-h-screen">
//       {lecture ? (
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-blue-900 mb-2 border-b pb-2">{lecture.title}</h1>
          
//           <div className="flex flex-wrap gap-2 mb-4">
//             <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
//               {lecture.subject}
//             </span>
//             <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
//               {lecture.difficulty_level}
//             </span>
//             <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
//               Progress: {watchedPercentage}%
//             </span>
//           </div>
          
//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Video and controls section */}
//             <div className="w-full lg:w-1/2">
//               <div className="sticky top-8">
//                 <div className="rounded-lg overflow-hidden shadow-lg bg-white border border-blue-100">
//                   <video 
//                     ref={videoRef}
//                     controls 
//                     width="100%" 
//                     poster={lecture.video_thumbnail}
//                     className="w-full aspect-video"
//                     onTimeUpdate={handleTimeUpdate}
//                   >
//                     <source src={lecture.lecture} type="video/mp4" />
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
                
//                 {/* Progress bar */}
//                 <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
//                   <div 
//                     className="bg-indigo-600 h-2.5 rounded-full" 
//                     style={{ width: `${watchedPercentage}%` }}
//                   ></div>
//                 </div>
                
//                 <div className="flex justify-between items-center mt-2">
//                   <p className="text-sm text-gray-500 flex items-center">
//                     <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//                     </svg>
//                     Duration: {lecture.video_duration || "00:00"}
//                   </p>
                  
//                   <div className="flex items-center space-x-4">
//                     <div className="flex items-center">
//                       <span className="mr-2 text-sm text-gray-600">Autoplay</span>
//                       <button
//                         onClick={toggleAutoplay}
//                         className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none transition-colors ${autoplayNext ? 'bg-indigo-600' : 'bg-gray-300'}`}
//                       >
//                         <span className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${autoplayNext ? 'translate-x-6' : 'translate-x-1'}`} />
//                       </button>
//                     </div>
                    
//                     <div className="flex items-center">
//                       <span className="mr-2 text-sm text-gray-600">Drowsiness Alert</span>
//                       <button
//                         onClick={toggleDrowsinessDetection}
//                         className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none transition-colors ${drowsinessDetectionActive ? 'bg-indigo-600' : 'bg-gray-300'}`}
//                       >
//                         <span className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${drowsinessDetectionActive ? 'translate-x-6' : 'translate-x-1'}`} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
                
//                 {/* Drowsiness detection camera */}
//                 {drowsinessDetectionActive && (
//                   <video
//                     ref={cameraRef}
//                     autoPlay
//                     playsInline
//                     muted
//                     className="mt-4 w-full h-48 rounded-lg shadow-lg border-2 border-blue-200 transition-opacity duration-500"
//                     style={{ opacity: isVisible ? 1 : 0 }}
//                   />
//                 )}
                
//                 {/* Alert for drowsiness */}
//                 {showAlert && (
//                   <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center shadow-lg border border-red-200 animate-pulse">
//                     <div className="flex items-center space-x-2">
//                       <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
//                       </svg>
//                       <span className="font-semibold">You seem tired! Please take a break and freshen up.</span>
//                     </div>
//                   </div>
//                 )}
                
//                 <div className="mt-6 flex flex-wrap gap-2">
//                   <button
//                     onClick={() => navigate('/quiz')}
//                     className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
//                   >
//                     Take Quiz
//                   </button>
                  
//                   <button
//                     onClick={() => {
//                       // Mark as completed logic would go here
//                       alert("Lecture marked as completed!");
//                     }}
//                     className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
//                   >
//                     Mark Complete
//                   </button>
                  
//                   <button
//                     onClick={summarizeLecture}
//                     disabled={summarizing}
//                     className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ${
//                       summarizing ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//                   >
//                     {summarizing ? (
//                       <div className="flex items-center">
//                         <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
//                         <span>Summarizing...</span>
//                       </div>
//                     ) : (
//                       'Summarize Lecture'
//                     )}
//                   </button>
//                 </div>
//               </div>
//             </div>
            
//             {/* Content section */}
//             <div className="w-full lg:w-1/2">
//               {/* Summary section */}
//               <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-md">
//                 <h2 className="text-xl font-bold mb-3 text-blue-900">Lecture Summary</h2>
//                 {summarizing ? (
//                   <div className="flex items-center space-x-2 text-blue-600">
//                     <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
//                     <span>Generating summary...</span>
//                   </div>
//                 ) : (
//                   <p className="text-blue-800 leading-relaxed">
//                     {summary || 'Click "Summarize Lecture" to generate an AI summary of this lecture.'}
//                   </p>
//                 )}
//               </div>
              
//               {/* Description */}
//               <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
//                 <h2 className="text-xl font-bold mb-3 text-gray-700">Description</h2>
//                 <p className="text-gray-600 leading-relaxed">{lecture.content_text}</p>
//               </div>
              
//               {/* Lecture Resources */}
//               <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-md">
//                 <h2 className="text-xl font-bold mb-3 text-gray-700">Lecture Resources</h2>
//                 {lecture.file1 && (
//                   <a 
//                     href={lecture.file1} 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="flex items-center text-indigo-600 hover:text-indigo-800 bg-white p-3 rounded-md shadow-sm hover:shadow transition mb-2"
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
//                     </svg>
//                     Download Lecture Notes (PDF)
//                   </a>
//                 )}
//                 {lecture.file2 && (
//                   <a 
//                     href={lecture.file2} 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     className="flex items-center text-indigo-600 hover:text-indigo-800 bg-white p-3 rounded-md shadow-sm hover:shadow transition"
//                   >
//                     <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
//                     </svg>
//                     Download Additional Resources
//                   </a>
//                 )}
//               </div>
              
             
              
//               {/* Related lectures */}
//               {recommendations.length > 0 && (
//                 <div className="bg-white p-4 rounded-lg shadow-md">
//                   <h2 className="text-xl font-bold mb-3 text-gray-700">Continue Learning</h2>
//                   <div className="space-y-4">
//                     {recommendations.map((rec) => (
//                       <div 
//                         key={rec.id} 
//                         className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-3 flex items-center"
//                       >
//                         <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0">
//                           <img 
//                             src={rec.video_thumbnail} 
//                             alt={rec.title} 
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div className="ml-4 flex-grow">
//                           <h3 className="font-semibold text-gray-800">{rec.title}</h3>
//                           <p className="text-xs text-gray-500">
//                             {rec.difficulty_level} • {rec.subject}
//                           </p>
//                         </div>
//                         <button
//                           onClick={() => handleWatchNow(rec.id)}
//                           className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors"
//                         >
//                           Watch
//                         </button>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       ) : (
//         <div className="text-center py-8">
//           <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//           </svg>
//           <p className="mt-2 text-gray-500">No lecture found.</p>
//         </div>
//       )}
      
//       {/* Next lecture modal */}
//       {showNextLectureModal && recommendations.length > 0 && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
//             <h3 className="text-xl font-bold mb-2">Up Next</h3>
//             <div className="flex items-center mb-4">
//               <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0">
//                 <img 
//                   src={recommendations[0].video_thumbnail} 
//                   alt={recommendations[0].title} 
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="ml-4">
//                 <h4 className="font-semibold">{recommendations[0].title}</h4>
//                 <p className="text-sm text-gray-500">{recommendations[0].subject}</p>
//               </div>
//             </div>
            
//             {autoplayNext && (
//               <p className="text-sm text-gray-600 mb-4">
//                 Playing in {countdownTimer} seconds...
//               </p>
//             )}
            
//             <div className="flex justify-between">
//               <button
//                 onClick={() => setShowNextLectureModal(false)}
//                 className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleNextLecture}
//                 className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
//               >
//                 Watch Now
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RoboFlowLecture;
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

// Drowsiness detection constants
const API_URL = "https://detect.roboflow.com/driver-fatigue/2";
const API_KEY = "963hJ2hzap5b1YqukTuE";
const ALERT_COOLDOWN = 10000; // 10 seconds in milliseconds

const RoboFlowLecture = () => {
  const navigate = useNavigate();
  const { lectureId } = useParams();
  const [lecture, setLecture] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [currentTime, setCurrentTime] = useState(0);
  const [watchedPercentage, setWatchedPercentage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [autoplayNext, setAutoplayNext] = useState(false);
  const [showNextLectureModal, setShowNextLectureModal] = useState(false);
  const [countdownTimer, setCountdownTimer] = useState(10);
  const [summary, setSummary] = useState('');
  const [summarizing, setSummarizing] = useState(false);
  const videoRef = useRef(null);
  
  // Drowsiness detection states
  const [isVisible, setIsVisible] = useState(false);
  const [detectionStatus, setDetectionStatus] = useState('Awake');
  const [showAlert, setShowAlert] = useState(false);
  const cameraRef = useRef(null);
  const lastAlertTimeRef = useRef(0);
  const [drowsinessDetectionActive, setDrowsinessDetectionActive] = useState(false);
  const [wasVideoPaused, setWasVideoPaused] = useState(false);

  // Fetch current lecture data
  useEffect(() => {
    const fetchLecture = async () => {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/lectures/${lectureId}/`);
        setLecture(response.data);
        // Reset video progress when lecture changes
        setCurrentTime(0);
        setWatchedPercentage(0);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    
    fetchLecture();
  }, [lectureId]);

  // Fetch recommendations based on current lecture
  useEffect(() => {
    const fetchRecommendations = async () => {
      if (!lecture) return;
      
      try {
        // Fetch recommendations based on subject, level, etc.
        const response = await axios.get(`http://127.0.0.1:8000/recommendations/?subject=${lecture.subject}&level=${lecture.difficulty_level}&current=${lectureId}`);
        setRecommendations(response.data.slice(0, 3)); // Limit to 3 recommendations
      } catch (err) {
        console.error('Error fetching recommendations:', err);
      }
    };
    
    fetchRecommendations();
  }, [lecture, lectureId]);

  // Automatically activate drowsiness detection when video starts playing
  const handleVideoPlay = () => {
    if (!drowsinessDetectionActive) {
      setDrowsinessDetectionActive(true);
    }
  };

  // Deactivate drowsiness detection when video is paused
  const handleVideoPause = () => {
    // Only deactivate if the pause wasn't triggered by drowsiness detection
    if (!showAlert) {
      setDrowsinessDetectionActive(false);
    }
  };

  // Drowsiness detection functions
  const speakAlert = (message) => {
    const speech = new SpeechSynthesisUtterance(message);
    speech.rate = 0.9;
    speech.pitch = 1;
    speech.volume = 1;
    window.speechSynthesis.speak(speech);
  };

  const detectFatigue = async () => {
    if (!cameraRef.current || !drowsinessDetectionActive) return;

    const video = cameraRef.current;
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(video, 0, 0);

    try {
      const blob = await new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
      const formData = new FormData();
      formData.append('file', blob);

      const response = await fetch(`${API_URL}?api_key=${API_KEY}`, {
        method: 'POST',
        body: formData
      });
      const result = await response.json();

      if (result.predictions) {
        const currentTime = Date.now();

        for (const prediction of result.predictions) {
          if (prediction.class.toLowerCase().includes('drowsy')) {
            setDetectionStatus('Drowsy');

            if (currentTime - lastAlertTimeRef.current >= ALERT_COOLDOWN) {
              // Pause the video when drowsiness detected
              if (videoRef.current && !videoRef.current.paused) {
                videoRef.current.pause();
                setWasVideoPaused(true);
              }
              
              setShowAlert(true);
              speakAlert("Alert! You seem tired. Please take a break and freshen up.");
              lastAlertTimeRef.current = currentTime;

              setTimeout(() => {
                setShowAlert(false);
              }, 10000);
            }
          } else {
            setDetectionStatus('Awake');
            
            // If previously drowsy and video was paused because of it, resume video
            if (showAlert && wasVideoPaused && videoRef.current) {
              setShowAlert(false);
              setWasVideoPaused(false);
              // We'll let the user manually resume when they're ready
            }
          }
        }
      }
    } catch (error) {
      console.error("Error during fatigue detection:", error);
    }
  };

  // Set up and tear down drowsiness detection
  useEffect(() => {
    let detectionInterval;
    
    if (drowsinessDetectionActive) {
      const initializeCamera = async () => {
        try {
          const stream = await navigator.mediaDevices.getUserMedia({ video: true });
          if (cameraRef.current) {
            cameraRef.current.srcObject = stream;
          }
          
          // Animation delay
          const timer = setTimeout(() => setIsVisible(true), 100);
          
          // Start detection interval
          detectionInterval = setInterval(detectFatigue, 1000);
          
          return () => {
            clearTimeout(timer);
          };
        } catch (error) {
          console.error("Error accessing camera:", error);
          setDrowsinessDetectionActive(false);
        }
      };
      
      initializeCamera();
    } else {
      // Clean up camera if detection is turned off
      if (cameraRef.current?.srcObject) {
        cameraRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
      setIsVisible(false);
    }
    
    return () => {
      if (detectionInterval) {
        clearInterval(detectionInterval);
      }
      
      // Clean up on component unmount
      if (cameraRef.current?.srcObject) {
        cameraRef.current.srcObject.getTracks().forEach(track => track.stop());
      }
    };
  }, [drowsinessDetectionActive]);

  // Track video progress
  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    
    const currentTime = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    
    setCurrentTime(currentTime);
    setWatchedPercentage(Math.floor((currentTime / duration) * 100));
    
    // When video is near completion (95%), show the next lecture suggestion modal
    if (currentTime / duration > 0.95 && recommendations.length > 0) {
      setShowNextLectureModal(true);
    }
  };

  // Countdown timer for autoplay next lecture
  useEffect(() => {
    let interval;
    
    if (showNextLectureModal && autoplayNext) {
      interval = setInterval(() => {
        setCountdownTimer((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(interval);
            handleNextLecture();
            return 10;
          }
          return prevTime - 1;
        });
      }, 1000);
    }
    
    return () => clearInterval(interval);
  }, [showNextLectureModal, autoplayNext]);

  // Handle next lecture navigation
  const handleNextLecture = () => {
    if (recommendations.length > 0) {
      navigate(`/lecture/${recommendations[0].id}`);
      setShowNextLectureModal(false);
      setCountdownTimer(10);
    }
  };

  // Toggle autoplay for next lecture recommendations
  const toggleAutoplay = () => {
    setAutoplayNext(!autoplayNext);
  };

  // Handle Watch Now button click
  const handleWatchNow = (id) => {
    navigate(`/lecture/${id}`);
  };

  // Resume video after alert
  const handleResumeVideo = () => {
    if (videoRef.current && wasVideoPaused) {
      videoRef.current.play();
      setWasVideoPaused(false);
      setShowAlert(false);
    }
  };

  // Generate summary
  const summarizeLecture = async () => {
    try {
      setSummarizing(true);
      const response = await axios.post(
        `http://127.0.0.1:8000/resources/${lectureId}/summarize/`
      );

      if (response.data.status === 'success') {
        setSummary(response.data.summary);
      } else {
        throw new Error(response.data.error || 'Failed to generate summary');
      }
    } catch (error) {
      console.error('Error generating summary:', error);
      alert(error.response?.data?.error || 'Failed to generate summary');
    } finally {
      setSummarizing(false);
    }
  };

  if (loading) return (
    <div className="flex justify-center items-center h-64">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
    </div>
  );
  
  if (error) return (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4 max-w-4xl mx-auto">
      <p className="text-red-600">Error: {error}</p>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white p-6 min-h-screen">
      {lecture ? (
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-blue-900 mb-2 border-b pb-2">{lecture.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
              {lecture.subject}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {lecture.difficulty_level}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
              Progress: {watchedPercentage}%
            </span>
          </div>
          
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Video and controls section */}
            <div className="w-full lg:w-1/2">
              <div className="sticky top-8">
                <div className="rounded-lg overflow-hidden shadow-lg bg-white border border-blue-100">
                  <video 
                    ref={videoRef}
                    controls 
                    width="100%" 
                    poster={lecture.video_thumbnail}
                    className="w-full aspect-video"
                    onTimeUpdate={handleTimeUpdate}
                    onPlay={handleVideoPlay}
                    onPause={handleVideoPause}
                  >
                    <source src={lecture.lecture} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                
                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                  <div 
                    className="bg-indigo-600 h-2.5 rounded-full" 
                    style={{ width: `${watchedPercentage}%` }}
                  ></div>
                </div>
                
                <div className="flex justify-between items-center mt-2">
                  <p className="text-sm text-gray-500 flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Duration: {lecture.video_duration || "00:00"}
                  </p>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <span className="mr-2 text-sm text-gray-600">Autoplay Next Lecture</span>
                      <button
                        onClick={toggleAutoplay}
                        className={`relative inline-flex items-center h-6 rounded-full w-11 focus:outline-none transition-colors ${autoplayNext ? 'bg-indigo-600' : 'bg-gray-300'}`}
                      >
                        <span className={`inline-block w-4 h-4 transform transition-transform bg-white rounded-full ${autoplayNext ? 'translate-x-6' : 'translate-x-1'}`} />
                      </button>
                    </div>
                    
                    <div className="flex items-center">
                      <span className="text-sm text-gray-600">
                        <span className={detectionStatus === 'Awake' ? 'text-green-600' : 'text-red-600'}>
                          {drowsinessDetectionActive ? `Status: ${detectionStatus}` : 'Drowsiness detection inactive'}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Drowsiness detection camera - always show when video is playing */}
                {drowsinessDetectionActive && (
                  <video
                    ref={cameraRef}
                    autoPlay
                    playsInline
                    muted
                    className="mt-4 w-full h-48 rounded-lg shadow-lg border-2 border-blue-200 transition-opacity duration-500"
                    style={{ opacity: isVisible ? 1 : 0 }}
                  />
                )}
                
                {/* Alert for drowsiness */}
                {showAlert && (
                  <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg text-center shadow-lg border border-red-200 animate-pulse">
                    <div className="flex flex-col items-center space-y-3">
                      <div className="flex items-center space-x-2">
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        <span className="font-semibold">You seem tired! Video paused for your safety.</span>
                      </div>
                      <button
                        onClick={handleResumeVideo}
                        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                      >
                        I'm Awake - Resume Video
                      </button>
                    </div>
                  </div>
                )}
                
                <div className="mt-6 flex flex-wrap gap-2">
                  <button
                    onClick={() => navigate('/quiz')}
                    className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
                  >
                    Take Quiz
                  </button>
                  
                  <button
                    onClick={() => {
                      // Mark as completed logic would go here
                      alert("Lecture marked as completed!");
                    }}
                    className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
                  >
                    Mark Complete
                  </button>
                  
                  <button
                    onClick={summarizeLecture}
                    disabled={summarizing}
                    className={`px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors ${
                      summarizing ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {summarizing ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        <span>Summarizing...</span>
                      </div>
                    ) : (
                      'Summarize Lecture'
                    )}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Content section */}
            <div className="w-full lg:w-1/2">
              {/* Summary section */}
              <div className="mb-6 bg-blue-50 p-4 rounded-lg border border-blue-100 shadow-md">
                <h2 className="text-xl font-bold mb-3 text-blue-900">Lecture Summary</h2>
                {summarizing ? (
                  <div className="flex items-center space-x-2 text-blue-600">
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-blue-600 border-t-transparent"></div>
                    <span>Generating summary...</span>
                  </div>
                ) : (
                  <p className="text-blue-800 leading-relaxed">
                    {summary || 'Click "Summarize Lecture" to generate an AI summary of this lecture.'}
                  </p>
                )}
              </div>
              
              {/* Description */}
              <div className="mb-6 bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-3 text-gray-700">Description</h2>
                <p className="text-gray-600 leading-relaxed">{lecture.content_text}</p>
              </div>
              
              {/* Lecture Resources */}
              <div className="mb-6 bg-gray-50 p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-3 text-gray-700">Lecture Resources</h2>
                {lecture.file1 && (
                  <a 
                    href={lecture.file1} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-indigo-600 hover:text-indigo-800 bg-white p-3 rounded-md shadow-sm hover:shadow transition mb-2"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    Download Lecture Notes (PDF)
                  </a>
                )}
                {lecture.file2 && (
                  <a 
                    href={lecture.file2} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-indigo-600 hover:text-indigo-800 bg-white p-3 rounded-md shadow-sm hover:shadow transition"
                  >
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    Download Additional Resources
                  </a>
                )}
              </div>
              
              {/* Related lectures */}
              {recommendations.length > 0 && (
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <h2 className="text-xl font-bold mb-3 text-gray-700">Continue Learning</h2>
                  <div className="space-y-4">
                    {recommendations.map((rec) => (
                      <div 
                        key={rec.id} 
                        className="bg-gray-50 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-3 flex items-center"
                      >
                        <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0">
                          <img 
                            src={rec.video_thumbnail} 
                            alt={rec.title} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-4 flex-grow">
                          <h3 className="font-semibold text-gray-800">{rec.title}</h3>
                          <p className="text-xs text-gray-500">
                            {rec.difficulty_level} • {rec.subject}
                          </p>
                        </div>
                        <button
                          onClick={() => handleWatchNow(rec.id)}
                          className="px-3 py-1 bg-indigo-600 text-white text-sm rounded hover:bg-indigo-700 transition-colors"
                        >
                          Watch
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center py-8">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <p className="mt-2 text-gray-500">No lecture found.</p>
        </div>
      )}
      
      {/* Next lecture modal */}
      {showNextLectureModal && recommendations.length > 0 && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">Up Next</h3>
            <div className="flex items-center mb-4">
              <div className="w-24 h-16 rounded overflow-hidden flex-shrink-0">
                <img 
                  src={recommendations[0].video_thumbnail} 
                  alt={recommendations[0].title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">{recommendations[0].title}</h4>
                <p className="text-sm text-gray-500">{recommendations[0].subject}</p>
              </div>
            </div>
            
            {autoplayNext && (
              <p className="text-sm text-gray-600 mb-4">
                Playing in {countdownTimer} seconds...
              </p>
            )}
            
            <div className="flex justify-between">
              <button
                onClick={() => setShowNextLectureModal(false)}
                className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleNextLecture}
                className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition-colors"
              >
                Watch Now
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoboFlowLecture;