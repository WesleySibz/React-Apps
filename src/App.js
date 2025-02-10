import { useState } from "react";
import { Button, Textarea } from "react";

export default function CodeConverter() {
  const [inputCode, setInputCode] = useState("");
  const [outputCode, setOutputCode] = useState("");

  const handleReadCode = () => {
    // Logic to analyze and explain the code (to be implemented)
    setOutputCode("Code analysis and explanation will appear here.");
  };

  const handleGenerateCode = () => {
    // Logic to convert the code (to be implemented)
    setOutputCode("Converted code will appear here.");
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Code Converter</h1>
      <div className="w-full max-w-2xl">
        <label className="block mb-2">Input Code:</label>
        <Textarea
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          rows="10"
          value={inputCode}
          onChange={(e) => setInputCode(e.target.value)}
        />
        <div className="flex justify-between mt-4">
          <Button className="bg-blue-500 px-4 py-2 rounded" onClick={handleReadCode}>
            Read Code
          </Button>
          <Button className="bg-green-500 px-4 py-2 rounded" onClick={handleGenerateCode}>
            Generate Answer
          </Button>
        </div>
        <label className="block mt-4 mb-2">Output:</label>
        <Textarea
          className="w-full p-2 rounded bg-gray-800 border border-gray-700"
          rows="10"
          value={outputCode}
          readOnly
        />
      </div>
    </div>
  );
}

