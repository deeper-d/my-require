class WeightedQuickUnionUF {
    constructor(props) {
        this.id = [];
        this.sz;
        this.count;
    }

    WeightQuickUnionUF(N) {
        this.count = N;
        for (let i = 0; i < N; i++) {
            this.is[i] = i
            this.sz[i] = 1
        }
    }

    count() {
        return this.count;
    }

    connected(p, q) {
        return find(p) === find(q)
    }

    find(p) {
        while(p !== this.id[p]) {
            p = id[p]
        }
        return p
    }

    union(p, q) {
        let i = this.find(p)
        let j = this.find(q)
        if (i == j) return
        if (this.sz[i] < this.sz[j]) {
            this.id[i] = j
            this.sz[j] += this.sz[i]
        } else {
            this.id[j] = i;
            this.sz[i] += this.sz[j]
        }
    }
}
