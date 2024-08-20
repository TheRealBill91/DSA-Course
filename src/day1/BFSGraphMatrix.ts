//     >(1)<--->(4) ---->(5)
//    /          |       /|
// (0)     ------|------- |
//    \   v      v        v
//     >(2) --> (3) <----(6)

//       0  1  2  3  4  5  6
//    +----------------------
//  0  | 0  3  1  0  0  0  0
//  1  | 0  0  0  0  1  0  0
//  2  | 0  0  7  0  0  0  0
//  3  | 0  0  0  0  0  0  0
//  4  | 0  1  0  5  0  2  0
//  5  | 0  0 18  0  0  0  1
//  6  | 0  0  0  1  0  0  1

export const matrix2: WeightedAdjacencyMatrix = [
    //prettier-ignore
    [0, 3, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 1, 0, 0],
    [0, 0, 7, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 5, 0, 2, 0],
    [0, 0, 18, 0, 0, 0, 1],
    [0, 0, 0, 1, 0, 0, 1],
];

/**
 * Performs a breadth-first search (BFS) on a weighted adjacency matrix graph to find the shortest path from a source node to a target (needle) node.
 *
 * @param {WeightedAdjacencyMatrix} graph - The weighted adjacency matrix representing the graph.
 * @param {number} source - The starting node for the BFS.
 * @param {number} needle - The target node to find in the graph.
 * @returns {number[] | null} An array representing the path from the source to the needle, or null if no path is found.
 */
export default function bfs(
    graph: WeightedAdjacencyMatrix,
    source: number,
    needle: number,
): number[] | null {
    const seen = new Array(graph.length).fill(false);

    const prev = new Array(graph.length).fill(-1);

    // saying we have already visited the place we started at
    seen[source] = true;
    const q: number[] = [source];

    do {
        const curr = q.shift() as number;

        if (curr === needle) {
            break;
        }

        const adjs = graph[curr];
        for (let i = 0; i < graph.length; i++) {
            if (adjs[i] === 0) {
                continue;
            }

            // have not visited this vertex
            if (seen[i]) {
                continue;
            }

            seen[i] = true;
            prev[i] = curr;
            // pushing in the node (row) we need to visit
            q.push(i);
        }
        seen[curr] = true;
    } while (q.length);

    if (prev[needle] === -1) {
        return null;
    }

    // build it backwards

    let curr = needle;
    const out: number[] = [];

    while (prev[curr] !== -1) {
        out.push(curr);
        curr = prev[curr];
    }

    return [source].concat(out.reverse());
}

console.log(bfs(matrix2, 0, 6));
