### Differences between BFS and DFS

**Key Differences Between BFS and DFS:**

   - BFS is vertex-based algorithm while DFS is an edge-based algorithm.
   - Queue data structure is used in BFS. On the other hand, DFS uses stack or recursion.
   - Memory space is efficiently utilized in DFS while space utilization in BFS is not effective.
   - BFS is optimal algorithm while DFS is not optimal.
   - DFS constructs narrow and long trees whereas BFS constructs wide and short tree.

### BFS Traversal

   - We have a graph whose vertices are A, B, C, D, E, F, G. Considering A as starting point, the steps involved in the process are:
   - Vertex A is expanded and stored in the queue.
   - Vertices B, D and G successors of A, are expanded and stored in the queue. Meanwhile Vertex A is removed.
   - Now B at the front end of the queue is removed along with storing its successor vertices E and F.
   - Vertex D at the front end of the queue is removed, and its connected node F is already visited.
   - Vertex G is removed from the queue, and it has successor E which is already visited.
   - Now E and F are removed from the queue, and its successor vertex C is traversed and stored in the queue.
   - At last C is also removed and the queue is empty which means we are done.
   - The generated Output is – A, B, D, G, E, F, C.
   - 
### BFS traversal on the Example graph
<img src="images/bfs.png"/>

### DFS Traversal
Similar to BFS lets take the same graph for performing DFS operations, and the involved steps are:

   - Considering A as the starting vertex which is explored and stored in the stack. B, the successor vertex of A, is stored in the stack.
   - Vertex B have two successors E and F, among them alphabetically E is explored first and stored in the stack.
   - The successor of vertex E, i.e., G is stored in the stack.
   - Ve-rtex G have two connected vertices, and both are already visited, so G is popped out from the stack.
   - Similarly, E is also removed.
   - Now, vertex B is at the top of the stack, its another node(vertex) F is explored and stored in the stack.
   - Vertex F has two successors C and D, between which C is traversed first and stored in the stack.
   - Vertex C has only one predecessor which is already visited, so it is removed from the stack.
   - Now vertex D connected to F is visited and stored in the stack.
   - As vertex D doesn’t have any unvisited nodes, therefore D is removed.
   - Similarly, F, B and A are also popped.
   - The generated output is – A, B, E, G, F, C, D.

### DFS traversal on the Example graph
<img src="images/bfs-1.png"/>


