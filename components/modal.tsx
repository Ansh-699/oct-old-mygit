// import React from "react";
// import { Dialog, DialogOverlay, DialogContent } from "@reach/dialog";
// import "@reach/dialog/styles.css";

// interface ModalProps {
//     children: React.ReactNode;
//     onClose: () => void;
// }

// export function Modal({ children, onClose }: ModalProps) {
//     return (
//         <Dialog isOpen={true} onDismiss={onClose}>
//             <DialogOverlay className="fixed inset-0 bg-black bg-opacity-50" />
//             <DialogContent className="relative bg-white rounded-lg shadow-lg p-6">
//                 <button
//                     className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
//                     onClick={onClose}
//                 >
//                     <span className="sr-only">Close</span>
//                     &times;
//                 </button>
//                 {children}
//             </DialogContent>
//         </Dialog>
//     );
// }