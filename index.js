class Task {
    constructor(description, status = "pending") {
        this.description = description;
        this.status = status;
    }
}

class ProjectManagementPlatform {
    constructor() {
        this.tasks = [];
        this.progress = 0;
        this.collaborationEnabled = true;
        this.innovative = true;
    }

    addTask(description) {
        const task = new Task(description);
        this.tasks.push(task);
    }

    completeTask(index) {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks[index].status = "completed";
            this.progress = (this.tasks.filter(task => task.status === "completed").length / this.tasks.length) * 100;
            console.log(`Task "${this.tasks[index].description}" has been completed.`);
        } else {
            console.log("Invalid task index.");
        }
    }

    viewTasks() {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. [${task.status}] ${task.description}`);
        });
    }

    trackProgress() {
        console.log(`Project progress: ${this.progress.toFixed(2)}%`);
    }

    collaborateWithEase() {
        if (this.collaborationEnabled) {
            console.log("Collaboration is enabled. Team members can easily work together.");
        } else {
            console.log("Collaboration is disabled.");
        }
    }

    isInnovative() {
        if (this.innovative) {
            console.log("Our platform is innovative.");
        } else {
            console.log("Our platform may not be considered innovative.");
        }
    }
}

// 示例用法
const projectPlatform = new ProjectManagementPlatform();

// 添加任务
projectPlatform.addTask("Design UI mockups");
projectPlatform.addTask("Develop backend functionality");
projectPlatform.addTask("Write documentation");

// 查看任务
projectPlatform.viewTasks();

// 完成任务
projectPlatform.completeTask(0);
projectPlatform.completeTask(1);

// 查看进度
projectPlatform.trackProgress();

// 启用协作
projectPlatform.collaborateWithEase();

// 检查是否创新
projectPlatform.isInnovative();
