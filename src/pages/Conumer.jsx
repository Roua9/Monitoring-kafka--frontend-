import React from "react"
import "./consumer.css"
import { BASE_URL } from "../config"
import useFetch from "../hooks/useFetch"
import { useState } from "react"
const Conumer = () => {
  const [selectedTopic, setSelectedTopic] = useState("")
  const { data } = useFetch(`${BASE_URL}/api/kafka/listTopics`)
  const [messages, setMessages] = useState([])

  const fetchMessages = async () => {
    if (selectedTopic) {
      const response = await fetch(
        `${BASE_URL}/api/test/consume/${selectedTopic}`
      )
      const data = await response.json()
      setMessages(data)
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
      <div className="viewMessage">
        <button type="button" class="btn btn-light" onClick={fetchMessages}>
          <i className="bi bi-eye"></i>
          <span> </span>
          View messages
        </button>
      </div>
      <div className="topics-container">
        <div className="table-container">
          <table className="table table-bordered">
            <thead className=" color-background">
              <tr>
                <th scope="col">Message</th>
              </tr>
            </thead>
            <tbody className="body">
              {messages.map((message, index) => (
                <tr key={index}>
                  <td>{message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Conumer
