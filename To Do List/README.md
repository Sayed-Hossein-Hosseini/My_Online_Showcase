# ✨ My To-Do List ✨

A sleek, feature-rich, and intuitive To-Do List application built with pure HTML, CSS, and Vanilla JavaScript. This project showcases a clean, responsive User Interface primarily in **Persian (Farsi)**, offering a delightful task management experience.

![Demo Screenshot Placeholder - Light Mode](https://via.placeholder.com/600x400.png?text=App+Screenshot+-+Light+Mode)
*(Consider replacing this with an actual screenshot of your app!)*

## 🚀 Features

*   **📝 Add New Tasks:** Quickly add tasks to your list.
*   **✔️ Mark as Done/Undone:** Toggle task completion status with a click.
*   **✏️ Edit Tasks:** Easily modify existing task descriptions.
*   **🗑️ Delete Tasks:** Remove individual tasks.
*   **💥 Clear All Tasks:** Wipe the entire list with a confirmation.
*   **🔍 Search Tasks:** Instantly find tasks with a live search filter.
*   **🚦 Filter Tasks:** View tasks by status:
    *   All
    *   Active (To-Do)
    *   Completed
*   **↕️ Drag & Drop Reordering:** Intuitively reorder your tasks.
*   **🌗 Light/Dark Theme:** Switch between light and dark modes for comfortable viewing.
*   **💾 Local Storage Persistence:** Your tasks are saved in your browser, so they persist across sessions.
*   **📅 Persian Date Display:** Shows the current date in the Persian (Jalali) calendar format.
*   **🌟 Highlight New Tasks:** Newly added tasks are briefly highlighted.
*   **📱 Responsive Design:** Looks great on desktops, tablets, and mobile devices.
*   **💬 Persian (Farsi) UI:** The primary user interface is in Persian.
*   **📊 Task Counter:** Displays total tasks and completed tasks.
*   **👻 Empty State:** A friendly message appears when no tasks are present.

## 🎨 Interface Preview

The application boasts a clean and modern design with a user-friendly layout.

**(Consider adding a GIF here showing the app in action, especially theme switching, adding tasks, and drag & drop!)**

![Demo Screenshot Placeholder - Dark Mode](https://via.placeholder.com/600x400.png?text=App+Screenshot+-+Dark+Mode)
*(Consider replacing this with an actual screenshot of your app in dark mode!)*

## 🛠️ Technologies Used

*   **HTML5:** For the basic structure and content.
*   **CSS3:** For styling, layout, and theming (utilizing CSS Variables).
*   **Vanilla JavaScript (ES6+):** For all the application logic, DOM manipulation, and interactivity.
*   **Local Storage API:** For persisting task data on the client-side.

## 🏁 Getting Started

No complex setup or build process required!

1.  **Clone the repository (or download the files):**
    ```bash
    git clone <your-repository-url>
    cd <repository-name>
    ```
2.  **Open `Index.html` in your web browser:**
    Simply double-click the `Index.html` file, or open it via your browser's "File > Open" menu.

That's it! You can start managing your tasks.

## ⚙️ How to Use

The application's interface is primarily in Persian. Here's how to navigate it:

*   **Add a task:** Type your task into the input field labeled "**کار جدید...**" (New Task...) and press Enter or click the "**➕**" button.
*   **Mark a task as done:** Click on the task text itself.
*   **Edit a task:** Click the "**✏**" (pencil) icon next to the task.
*   **Delete a task:** Click the "**🗑**" (trash) icon next to the task.
*   **Search:** Type your search query into the input field labeled "**جستجو...**" (Search...).
*   **Filter:** Click on the filter buttons:
    *   "**همه**" (All)
    *   "**انجام نشده**" (Not Done / Active)
    *   "**انجام شده**" (Done / Completed)
*   **Reorder tasks:** Click and drag a task to a new position in the list.
*   **Change theme:** Click the "**🌗 تغییر حالت روز / شب**" (Change Day/Night Mode) button.
*   **Clear all tasks:** Click the large "**🗑**" (trash) button in the top controls.

## 💡 Key JavaScript Functions

*   `addTask()`: Adds a new task.
*   `deleteTask(index)`: Deletes a task at a given index.
*   `editTask(index)`: Allows editing of a task's text.
*   `toggleDone(index)`: Toggles the completion status of a task.
*   `setFilter(filterType)`: Sets the current task filter.
*   `clearTasks()`: Removes all tasks.
*   `render(highlightLast)`: Re-renders the task list based on current tasks, filter, and search.
*   `save()`: Saves the current tasks array to local storage.
*   `dragStart(event, index)`, `allowDrop(event)`, `drop(event, indexTo)`: Handle drag and drop functionality.
*   `toggleTheme()`: Switches between light and dark themes.

## 🤝 Contributing

Contributions are welcome! If you have ideas for improvements or find a bug, please feel free to:
1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

---

Made with ❤️ by [Sayyed Hossein Hosseini DolatAbadi]
