import React from "react"
import "./producer.css"
import { BASE_URL } from "../config"
import useFetch from "../hooks/useFetch"
import { useState } from "react"
const Producer = () => {
  const { data } = useFetch(`${BASE_URL}/api/kafka/listTopics`)
  const [selectedTopic, setSelectedTopic] = useState("")
  const [message, setMessage] = useState("")

  const handleSendMessage = async (e) => {
    try {
      console.log("Selected Topic:", selectedTopic)
      console.log("Message:", message)
      const response = await fetch(
        `${BASE_URL}/api/test/sendMessage?topic=${encodeURIComponent(
          selectedTopic
        )}&message=${encodeURIComponent(message)}`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      if (response.ok) {
        alert("Message sent succesfully")
        setSelectedTopic("")
        setMessage("")
      } else {
        const result = await response.json()
        alert(result.message)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div>
      <div className="btn-group dropright">
        <div className="form">
          <select
            className="form-control custom-select"
            value={selectedTopic}
            onChange={(e) => setSelectedTopic(e.target.value)}
          >
            <option value="">Select a topic</option>
            {data.map((topic, index) => (
              <option key={index} value={topic}>
                {topic}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1 " className="message">
          Write message
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          //defaultValue={""}
        />
      </div>

      <button
        type="button"
        className="btn btn-outline"
        onClick={handleSendMessage}
      >
        Send
      </button>
    </div>
  )
}

export default Producer
