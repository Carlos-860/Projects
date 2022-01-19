function jobApp() {
  return {
    jobList: $persist([
      {
        id: '1',
        title: 'Backend Developer',
        type: 'Full-time',
        location: 'Remote',
        category: 'Engineering',
      },

      {
        id: '2',
        title: 'User Interface Designer',
        type: 'Part-time',
        location: 'Remote',
        category: 'Design',
      },

      {
        id: '3',
        title: 'SEO Specialist',
        type: 'Full-time',
        location: 'USA',
        category: 'SEO',
      },

      {
        id: '4',
        title: 'Content Writer',
        type: 'Part-time',
        location: 'Hybrid',
        category: 'Writing',
      },
    ]),

    activeJob: {
      title: 'Web Developer',
      type: 'Full-time',
      location: 'Remote',
      category: 'Engineering',
    },

    atTop: false,
    newPostModal: false,
    editMode: false, // To ensure where change heading of modal

    addNewJob() {
      this.activeJob.id = 5;
      this.jobList.push(this.activeJob);

      this.newPostModal = false;
      this.activeJob.id++;
      console.log(this.activeJob);
    },

    editJob(id) {
      this.editMode = true;
      this.newPostModal = true;
      this.activeJob = this.jobList.find((item) => {
        return item.id == id;
      });
    },

    updateJob(id) {
      var getJob = this.jobList.find((item) => {
        return item.id == id;
      });

      if (getJob) {
        this.jobList.splice(this.jobList.indexOf(getJob), 1, this.activeJob);
      }

      this.newPostModal = false;
    },

    removeJob(id) {
      var find = this.jobList.find((item) => {
        return item.id === id;
      });
      if (find) {
        this.jobList.splice(this.jobList.indexOf(find), 1);
      }
    },
  };
}
