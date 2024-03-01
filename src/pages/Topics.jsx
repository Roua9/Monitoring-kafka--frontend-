import React from "react"
import "./topics.css"
import { BASE_URL } from "../config"
import useFetch from "../hooks/useFetch"
import { useState } from "react"

const Topics = () => {
  const [newTopicName, setNewTopicName] = useState("")
  const { data, loading, error } = useFetch(`${BASE_URL}/api/kafka/listTopics`)
  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error: {error.message}</div>
  }

  const handleAddTopic = async (e) => {
    // e.preventDefault()

    try {
      const response = await fetch(
        `${BASE_URL}/api/kafka/addTopic?topicName=${encodeURIComponent(
          newTopicName
        )}`,
        {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        alert("Topic added successfully")
        setNewTopicName("")
        window.location.reload(true)
      } else {
        const result = await response.json()
        alert(result.message)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  const handleDeleteTopic = async (topicName) => {
    try {
      const response = await fetch(
        `${BASE_URL}/api/kafka/deleteTopic/${encodeURIComponent(topicName)}`,
        {
          method: "delete",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        alert("Topic deleted successfully")
        window.location.reload(true)
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
      <div>
        <button
          type="button"
          className="btn btn-outline-warning"
          data-toggle="modal"
          data-target="#exampleModal"
          data-whatever="@mdo"
        >
          Ajouter Topic
        </button>

        <div
          className="modal fade"
          id="exampleModal"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ajouter Topic
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <label htmlFor="recipient-name" className="col-form-label">
                      Nom Topic:
                    </label>
                    <input
                      type="text"
                      className="form-control topic"
                      id="recipient-name"
                      value={newTopicName}
                      onChange={(e) => setNewTopicName(e.target.value)}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleAddTopic}
                >
                  Ajouter
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="topics-container">
        <div className="table-container">
          <table className="table table-bordered">
            <thead className=" pink-background">
              <tr>
                <th scope="col">Nom Topics</th>
              </tr>
            </thead>
            <tbody className="text-body">
              {data.map((topic, index) => (
                <tr key={index}>
                  <td>
                    <span> {topic} </span>
                    <i
                      className="bi bi-trash"
                      style={{ cursor: "pointer" }}
                      onClick={() => handleDeleteTopic(topic)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Topics
