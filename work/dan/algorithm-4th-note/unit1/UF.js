class UF {
    constructor(props) {
        this.id;
        this.count;
    }

    UF(N) {
        this.count = N;
        this.id = [];
        for (let i = 0; i< N; i++) {
            this.id[i] = i
        }
    }

    count() {
        return this.count;
    }

    connected(p, q) {
        return find(p) === find(q)
    }

    find(p) {
        /**
         * 1 quick find
         * */
        return this.id[p]

        /**
         * 2 quick union
         * */
        while(p !== id[p]) {
            p = id[p]
        }
        return p

    }

    union(p, q) {
        /**
         * 1 quick find
         * 弊端 无法处理大型问题，因为要扫描真个id[]数组
         * */
        let pId = find(p)
        let qId = find(q)

        if (pId === qId) return

        for (let i = 0; i < this.id.length; i++) {
            if (this.id[i] === pId) {
                this.id[i] = qId
            }
        }
        this.count = this.count - 1;


        /**
         * 2 quick union
         * */
        let pRoot = find(p)
        let qRoot = find(q)
        if (pRoot === qRoot) return;
        id[pRoot] = qRoot;
        this.count = this.count - 1;

    }

}

